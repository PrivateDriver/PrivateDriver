import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

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

const CalendarItem: React.FC<CalendarItemProps> = ({ item, onUpdate }) => (
  <TouchableOpacity onPress={() => onUpdate(item)}>
    <Card>
      <Card.Content>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                            }}>
          <Text>{item.id} {item.start_time}</Text>
          <Text>{item.id} {item.driver_id}</Text>
          <Avatar.Text label="W" />
        </View>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

export default CalendarItem;