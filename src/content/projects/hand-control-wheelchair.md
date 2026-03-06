---
title: 'Autonomous Smart Wheelchair'
year: 2024
description: 'IoT-enabled wheelchair with smartphone control, collision prevention, and Telegram-based emergency GPS alerts.'
stack: ['Arduino', 'ESP32', 'C++', 'Telegram API', 'TinyGPS++']
image: 'https://github.com/user-attachments/assets/33b5f828-58fd-4d3d-846a-68452355162c'
featured: true
visible: true
---

## The Problem

For individuals with severe mobility impairments, traditional wheelchairs can sometimes be difficult to operate safely. We wanted to design an innovative solution that addresses the United Nations' Sustainable Development Goals (SDGs) 3, 10, and 11 by promoting health, reducing inequalities, and building more inclusive communities.

The core challenge was to build a system that not only allows for easy remote navigation but also actively protects the user from environmental hazards (like collisions) and ensures rapid medical response if an accident, such as a fall, occurs. Furthermore, as CP2 students, our team had no prior experience with Arduino or electronics, requiring us to learn hardware engineering and embedded C++ programming from scratch.

## The Solution

Through extensive research and perseverance, we engineered a dual-microcontroller architecture to split the workload between real-time motor control and asynchronous IoT communications.

![Wheelchair Hardware Prototype](https://github.com/user-attachments/assets/33b5f828-58fd-4d3d-846a-68452355162c)
![Sensors and Wiring](https://github.com/user-attachments/assets/43bf459d-5cbc-4640-953f-193f3600e4ac)
![App Interface](https://github.com/user-attachments/assets/ef83cf1e-2f29-4ec5-a81d-9e45ba803f08)

Here is how the system was structured:

### 1. Smartphone Control & Locomotion (Arduino)

The primary movement logic is handled by an Arduino microcontroller.

- **Bluetooth Integration:** The wheelchair is controlled via a smartphone application that sends directional serial commands (Forward, Backward, Left, Right) to the Arduino at a 9600 baud rate.
- **Motor Control:** The Arduino translates these serial characters into precise high/low digital signals across four motor control pins (`m1a`, `m1b`, `m2a`, `m2b`) to drive the wheelchair's wheels.

### 2. Active Collision Prevention

To ensure the user's physical safety, we integrated an ultrasonic sensor (triggered via pins 4 and 7) directly into the main control loop.

- As the wheelchair moves, it constantly calculates the duration of ultrasonic echoes to measure the distance to the nearest object.
- If an obstacle is detected at a distance of less than 30 cm, the motor logic automatically overrides the user's input and halts the wheelchair, effectively preventing collisions.

### 3. Fall Detection & IoT Emergency Alerts (ESP32)

For the safety monitoring component, we deployed an ESP32 microcontroller, leveraging its native WiFi capabilities.

- **Live GPS Tracking:** The ESP32 is wired to a GPS module via hardware serial, parsing real-time location data using the `TinyGPS++` library.
- **Telegram SOS System:** We implemented a fall detection mechanism using input sensors (pulled high via internal resistors). If a fall is detected, the ESP32 connects securely to a designated WiFi network and uses the `UniversalTelegramBot` API to instantly send an alert message and the user's exact GPS coordinates to a designated provider or family member.

---

## The Results

Despite starting with zero background in electronics, our team successfully built a fully functional, autonomous wheelchair prototype.

The final product seamlessly blends physical safety mechanisms with cloud-based emergency alerts, proving that complex, life-saving IoT systems can be developed through dedication and collaborative problem-solving.

**Watch the Project Demonstration:** [Instagram Video Link](https://www.instagram.com/reel/C87vjkItFCP/?igsh=MW40cTl2aTAwdzFoYg==)
