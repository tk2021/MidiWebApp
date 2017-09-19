# MidiWebApp
Midi application functions for angularJS using the Web MIDI API

Web MIDI API
https://webaudio.github.io/web-midi-api/

The Web MIDI API specification defines a means for web developers to enumerate, manipulate and access MIDI devices through:
interfaces that may provide hardware MIDI ports with other devices plugged into them
USB devices that support the USB-MIDI specification.

Similar to Apple’s CoreMIDI API and Microsoft’s windows MIDI API, the API is designed to represent the low-level software protocol of MIDI, in order to enable developers to build powerful MIDI software on top.

Abilities
Obtain access to MIDI Devices requestMIDIAccess
A prompt will pop up requesting system access to MIDI devices from the user (unless access is already implicitly granted)
Obtain access to client ‘synthesizing software’
