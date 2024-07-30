// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';
// import axiosRetry from 'axios-retry';
// import { Agenda } from 'react-native-calendars';
// import { Card, Avatar } from 'react-native-paper';

// interface Event {
//   id: number;
//   start_time: string;
//   end_time: string;
//   company_id: number;
//   created_at: string;
//   driver_id: number;
//   mileage: number | null;
//   updated_at: string;
//   vehicle_id: number;
// }

// interface Events {
//   [key: string]: Event[];
// }

// const CalendarItem: React.FC<{ item: Event }> = ({ item }) => (
//   <TouchableOpacity>
//     <Card>
//       <Card.Content>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Text>{item.id} {item.start_time}</Text>
//           <Text>{item.id} {item.driver_id}</Text>
//           <Avatar.Text label="W" />
//         </View>
//       </Card.Content>
//     </Card>
//   </TouchableOpacity>
// );

// const CalendarEventScreen: React.FC = () => {
//   const [events, setEvents] = useState<Events>({});

//   useEffect(() => {
//     axiosRetry(axios, { retries: 3 });

//     async function loadData() {
//       try {
//         console.log('Fetching events...');
//         const response = await axios.get('https://limo-app-server.loca.lt/events');
//         console.log('Response received:', response);
//         const data: Event[] = response.data;
//         const formattedEvents: Events = {};

//         data.forEach((event) => {
//           const date = event.start_time.split('T')[0]; // Extract the date part from start_time
//           if (!formattedEvents[date]) {
//             formattedEvents[date] = [];
//           }
//           formattedEvents[date].push(event);
//         });

//         console.log('Formatted Events:', formattedEvents); // Log the formatted events
//         setEvents(formattedEvents);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         Alert.alert('Error', 'Failed to load events. Please try again later.');
//       }
//     }

//     loadData().catch((error) => {
//       console.error('Unhandled promise rejection:', error);
//     });
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <Agenda
//         items={events}
//         renderItem={(item) => <CalendarItem item={item} />}
//         renderEmptyDate={() => <View><Text>No Events</Text></View>}
//         rowHasChanged={(r1, r2) => r1.id !== r2.id}
//       />
//     </View>
//   );
// };

// export default CalendarEventScreen;