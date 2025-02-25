import React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Text, ScrollView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), { duration })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, bodyStyle, style]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}
      >
        {children}
      </View>
    </Animated.View>
  );
}

function Item({ text }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function Parent({ open, text }) {
  return (
    <View style={styles.parent}>
      <AccordionItem isExpanded={open} viewKey="Accordion">
        <Item text={text} />
      </AccordionItem>
    </View>
  );
}

export default function App() {
  const open1 = useSharedValue(false);
  const open2 = useSharedValue(false); 
  const open3 = useSharedValue(false);
  const open4 = useSharedValue(false);

  const onPress1 = () => {
    open1.value = !open1.value;
  };
  const onPress2 = () => {
    open2.value = !open2.value;
  };
  const onPress3 = () => {
    open3.value = !open3.value;
  };
  const onPress4 = () => {
    open4.value = !open4.value;
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <Button onPress={onPress1} title="About App" />
        <Parent open={open1} text="BinBuddy is an local King County application dedicated to serving your recycling needs!" />
    
      <Button onPress={onPress2} title="How to Scan" />
      
        
        <Parent open={open2} text="Identifiable by the barcode icon or navigated through the home page, you can use our in app camera to scan barcodes. By scanning a barcode on any item, BinBuddy will do its best to determine whether the scanned item is recyclable or not."  />
      

      
      <Button onPress={onPress3} title="Developers" />
        <Parent open={open3} text="Our team: Team Lead: API Team:Database Team: App Development Team:" />
     
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    margin:0,
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
  },
  button:{
    backgroundColor:'#ceede6',
    
  },
  box: {
    height: 200,
    width: 300,
    padding:5,
    backgroundColor: '#53783e',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  text: {
    color: '#fff', // White text
    textAlign: 'center', // Center the text
    fontSize: 16, // Adjust the size if needed
  },
  });


