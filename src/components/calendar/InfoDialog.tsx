import React from 'react';
import { Dialog, Portal, Button, Paragraph } from 'react-native-paper';

const InfoDialog = ({ visible, hideDialog, info }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Event Info</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{info}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default InfoDialog;