import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import moment from 'moment-timezone';
import { getLocales } from 'expo-localization';

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
  const timeZone = getLocales()[0].timezone;
  const zonedDate = moment.tz(item.start_time, timeZone);
  const formattedStartTime = zonedDate.format('MMM D h:mma');

  return (
    <TouchableOpacity onPress={() => onUpdate(item)}>
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
  );
};

export default CalendarItem;