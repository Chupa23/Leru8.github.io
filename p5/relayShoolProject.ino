#include<IRremote.h>
#include <LiquidCrystal.h>
LiquidCrystal lcd(1, 2, 7,8, 9, 12);

int IR_pin = 5;

int releu = 4;
int interval = 1000;
boolean on;
boolean temp = false;
boolean timeMode = false;
int index= 0;

String mode = "Tensiune";

int maxTemp = 30;
int minTemp = 25;
int ThermistorPin = 0;
int Vo;
float R1 = 10000;
float logR2, R2, T;
float c1 = 1.009249522e-03, c2 = 2.378405444e-04, c3 = 2.019202697e-07;

IRrecv irrecv(IR_pin);
decode_results results;

void setup() {
  lcd.begin(16,2);
  //lcd.print("Arduino");
// Serial.begin(9600);
 irrecv.enableIRIn();
 
  pinMode(releu,OUTPUT);
}

void loop() {
  
   if(irrecv.decode(&results)){
    //Serial.println(results.value, HEX);
    switch(results.value){
      case 0xFF22DD: 
       if(!on && !temp && !timeMode){
        digitalWrite(releu, HIGH);
        on = true;
       }
      break;
      case 0xFF02FD:  
       if(on && !temp && !timeMode){
        digitalWrite(releu, LOW);
        on = false;
       }
        break;
       case 0XFFC23D:
        temp = !temp;
        timeMode = false;
        if(temp){
          mode = "Temperatura";
          }
          else{
            mode = "Tensiune";
            }
        break;

        case 0xFF906F :
          timeMode = !timeMode;
          temp = false;
          if(timeMode){
            mode = "Timp";
            }
        break;

      }
    irrecv.resume();
    }

   Vo = analogRead(ThermistorPin);
  R2 = R1 * (1023.0 / (float)Vo - 1.0);
  logR2 = log(R2);
  T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2));
  T = T - 273.15;

  if (temp && !timeMode){
    if(T > maxTemp && !on){
      digitalWrite(releu, HIGH);
      on = true;
      }
     else if(on && T<minTemp ) {
        digitalWrite(releu, LOW);
        on= false;
      }
    }

if (timeMode && !temp){
  index++;
  if(index% 5 == 0){
    if(!on){
      digitalWrite(releu, HIGH);
      on = true;
      }
     else if(on) {
        digitalWrite(releu, LOW);
        on= false;
      }
      index = 0;
  }
  }
    
  lcd.setCursor(1,0);
  lcd.print("Temp = ");
  lcd.print(T);   
  lcd.print(" C");
  lcd.setCursor(1,1);
  //lcd.print("TempMode:");
  lcd.print(mode);
//  if(timeMode){
//  lcd.print(" ");
//  lcd.print(index);
//  }
  delay(600);            
  lcd.clear();
  
 // T = (T * 9.0)/ 5.0 + 32.0; 

  ///Serial.print("Temperature: "); 
  ///Serial.print(T);
  //Serial.println(" C"); 

 // lcd.print("Temp = ");
     
//  lcd.print(" F");
  

}
