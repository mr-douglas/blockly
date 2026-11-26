import gpiozero
import time

sound_sensor = None

#This program uses console I/O


sound_sensor = gpiozero.DigitalInputDevice(17)
print('Listening... clap near the microphone')
while True:
  sound_sensor.wait_for_active()
  print('Sound detected!')
  time.sleep(0.5)
