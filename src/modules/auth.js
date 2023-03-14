import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

const apiUrl =
  process.env.NODE_ENV === "development" && "http://localhost:3000";
const defaultOptions = {
  host: apiUrl,
  mode: "local",
  debug: false,
  useRoles: false,
};

const storage = AsyncStorage;
const storageKey = "auth-storage";
const storageRoleKey = "auth-roles";
class Auth {
  constructor(options) {
    this.options = { ...defaultOptions, ...options };
    this.roles = options.useRoles ? [] : undefined;
    this.apiUrl = `${options.host}${
      options.prefixUrl ? options.prefixUrl : ""
    }`;
    this.apiAuthUrl = `${this.apiUrl}${
      options.authUrl ? options.authUrl : "/auth"
    }`;
    this.emailInput = options.emailInput ? options.emailInput : "email";
    this.passwordField = options.passwordField
      ? options.passwordField
      : "password";
    this.signInUrl = `${this.apiAuthUrl}${
      this.options.authUrl ? this.options.authUrl.signIn : "/sign_in"
    }`;
    this.signOutUrl = `${this.apiAuthUrl}${
      this.options.authUrl ? this.options.authUrl.signIn : "/sign_out"
    }`;
    this.validateTokenUrl = `${this.apiAuthUrl}${
      this.options.authUrl
        ? this.options.authUrl.validateToken
        : "/validate_token"
    }`;
    axios.interceptors.response.use(
      (response) => {
        if (Array.isArray(response.data)) {
          return {
            ...response,
            total: parseInt(response.headers["data-count"]),
          };
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  test() {
    axios
      .get(this.signInUrl)
      .then((response) => {
        console.log(`Connection success: `);
        console.table(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Connection success");
        } else {
          console.log("Connection errror");
        }
      });
  }
  tokenHeaders() {
    return this.session;
  }
  signUp(userFields, confirmSuccessUrl) {
    return new Promise(async (resolve, reject) => {
      try {
        const signUpResponse = await axios.post(
          this.apiAuthUrl,
          {
            ...userFields,
          },
          { params: { confirm_success_url: confirmSuccessUrl } }
        );
        this.setSession(signUpResponse.headers);
        resolve(signUpResponse);
      } catch (error) {
        reject(error);
      }
    });
  }
  signIn(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const signInResponse = await axios.post(this.signInUrl, {
          [this.emailInput]: email,
          [this.passwordField]: password,
        });
        this.setSession(signInResponse.headers);
        const validateResponse = await this.validateToken(
          signInResponse.headers
        );
        this.setRoles(validateResponse);
        resolve(validateResponse);
      } catch (error) {
        reject(error);
      }
    });
  }
  signOut() {
    this.session = JSON.parse(storage.getItem(storageKey));
    if (!this.session) throw "No active session";
    storage.removeItem(storageKey);
    const lastSession = this.session;
    this.session = undefined;
    return new Promise(async (resolve, reject) => {
      try {
        const logOutResponse = await axios.delete(this.signOutUrl, {
          headers: { ...lastSession },
        });
        resolve(logOutResponse.data);
      } catch (err) {
        resolve("Error when delete server session but local was deleted");
      }
    });
  }
  deleteResource() {
    if (!this.session) throw "No active session";
    return new Promise(async (resolve, reject) => {
      try {
        const logOutResponse = await axios.delete(this.apiAuthUrl, {
          headers: { ...this.session },
        });
        resolve(logOutResponse.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  validateToken(headers) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(this.validateTokenUrl, {
          params: {
            uid: headers.uid,
            client: headers.client,
            "access-token": headers["access-token"],
          },
        });
        this.setSession(response.headers);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  changePassword(oldPassword, newPassword, newPasswordConfirmation) {
    return new Promise(async (resolve, reject) => {
      try {
        const changePasswordResponse = await axios.put(
          this.apiAuthUrl,
          {
            current_password: oldPassword,
            password: newPassword,
            password_confirmation: newPasswordConfirmation,
          },
          {
            headers: { ...this.session },
          }
        );
        this.setSession(changePasswordResponse.headers);
        resolve(changePasswordResponse);
      } catch (err) {
        if (err.response.headers["access-token"]) {
          this.setSession(err.response.headers);
        }
        reject(err);
      }
    });
  }
  resetPassword(email, redirectUrl) {
    return new Promise(async (resolve, reject) => {
      try {
        const resetPasswordResponse = await axios.post(
          `${this.apiAuthUrl}/password`,
          { email, redirect_url: redirectUrl }
        );
        this.debugIfActive(resetPasswordResponse);
        resolve(resetPasswordResponse);
      } catch (err) {
        this.debugIfActive(err.response);
        reject(err);
      }
    });
  }
  updatePasswordByToken(token, redirectUrl) {
    return new Promise(async (resolve, reject) => {
      try {
        const updatePassword = await axios.get(
          `${this.apiAuthUrl}/password/edit`,
          {
            params: { reset_password_token: token, redirect_url: redirectUrl },
          }
        );
        resolve(updatePassword);
      } catch (err) {
        reject(err);
      }
    });
  }
  privateRoute(url, options = {}) {
    if (url[0] === "/") {
      url = `${this.apiUrl}${url}`;
    }
    return new Promise(async (resolve, reject) => {
      try {
        const reponse = await axios({
          url,
          method: options.method,
          data: options.data,
          params: options.params,
          headers: {
            ...options.headers,
            ...this.session,
          },
        });
        this.setSession(reponse.headers);
        resolve(reponse);
      } catch (err) {
        if (err.response.headers["access-token"]) {
          this.setSession(err.response.headers);
        }
        reject(err);
      }
    });
  }
  async setSession(headers) {
    if (!this.session) {
      return (this.session = headers);
    }
    const session = {
      ["access-token"]: headers["access-token"]
        ? headers["access-token"]
        : this.session["access-token"],
      ["cache-control"]: headers["cache-control"]
        ? headers["cache-control"]
        : this.session["cache-control"],
      client: headers.client ? headers.client : this.session.client,
      ["content-type"]: headers["content-type"]
        ? headers["content-type"]
        : this.session["content-type"],
      expiry: headers.expiry ? headers.expiry : this.session.expiry,
      ["token-type"]: headers["token-type"]
        ? headers["token-type"]
        : this.session["token-type"],
      uid: headers.uid ? headers.uid : this.session.uid,
    };
    this.session = { ...session };
    await storage.setItem(storageKey, JSON.stringify(session));
  }
  async setLastSession() {
    if (this.options.mode === "local") {
      await this.setLastLocalSession();
    }
    if (this.options.useRoles) {
      await this.setLastRoles();
    }
  }
  async setLastLocalSession() {
    const lastSession = await storage.getItem(storageKey);
    console.table(lastSession);
    if (lastSession) {
      try {
        const headers = JSON.parse(lastSession);
        this.setSession(headers);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async setRoles(response) {
    if (this.options.useRoles) {
      try {
        this.roles = response && response.data ? response.data.roles : [];
        await storage.setItem(storageRoleKey, JSON.stringify(this.roles));
      } catch (error) {
        console.log(error);
      }
    }
  }
  async setLastRoles() {
    const lastRoles = await storage.getItem(storageRoleKey);
    if (lastRoles) {
      try {
        this.roles = JSON.parse(lastRoles);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
export default Auth;