# react_3D_Keypad

This repo contains react component that provides additional features to a login page.

It uses Force Touch (3D Touch) on supported devices to read pressure values along with pins as passwords.

Fall back method Polylines is used on unsupported devices.

The login will be successful only if both pin and pressure matches to that of registered.

# Demo

Deployed in Github Pages: https://ajaichemmanam.github.io/react_3D_Keypad/

# Usage

- Enter any number (Eg. 1486)
- Keep Pressing on any digit (Eg.4) for a higher force
- Click Register
- Try to enter with same number but without force or long press on the digit (Fails)
- Try to enter using the same force applied on the digit (Success)

# Supported Devices

Future devices and browsers that support pressure will be added when they are released.

- Microsoft Surface, Wacom Tablets (Device that supports pointer events): Chrome, Opera, IE, Edge
- iPhone 6s, iPhone 6s Plus, iPhone 7, iPhone 7 Plus : Safari, Chrome, anything using WKWebView
- MacBook & MacBook Pro 2015 and later: Safari
- Magic Trackpad 2 : Safari
- iPad Pro with Apple Pencil : Safari, Chrome, anything using WKWebView

# Credits

@github/rubcuadra
