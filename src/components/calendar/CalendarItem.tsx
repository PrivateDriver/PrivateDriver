import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import moment from 'moment-timezone';
import * as Localization from 'expo-localization'; // Import Localization from expo-localization
import InfoDialog from './InfoDialog'; // Import the InfoDialog component


interface Event {
  id: string;
  driver_id: string;
  start_time: string;
  // Add other event properties here
}

interface CalendarItemProps {
  item: Event;
  onUpdate: (event: Event) => void;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ item, onUpdate }) => {
  const [visible, setVisible] = useState(false); // State for dialog visibility

  const timeZone = Localization.getCalendars()[0].timeZone; // Get the timezone
  const zonedDate = moment.tz(item.start_time, timeZone);
  const formattedStartTime = zonedDate.format('MMM D h:mma');

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
    <TouchableOpacity onPress={showDialog}>
      <Card style={{ marginTop: 10 }}>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'column' }}>
              <Text>Client: {item.id}</Text>
              <Text>Start Time: {formattedStartTime}</Text>
              <Text>Driver: {item.driver_id}</Text>
            </View>

            <Avatar.Text label="W" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>

    <InfoDialog
        visible={visible}
        hideDialog={hideDialog}
        info={`Client: ${item.id}\nStart Time: ${formattedStartTime}\nDriver: ${item.driver_id}`}
      />
    </View>
  );
};

export default CalendarItem;