# maps-testing

## main functions

- Allow users to activate a 'get home' function which ensures the user does not deviate from the main or alternative routes, AND within the estimated amount of time.
- Allow user friends to see the user's location. If any of the above conditions are broken, friends will receive a text. 
- Emergency services will be texted with the user's location details in exteme conditions (conditions TBD).
- (Side feature) allow users to find each other in crowds with a compass-style arrow

---

## Feature breakdown

### 1. Allow users to activate a 'get home' function which ensures the user does not deviate from the main or alternative routes, AND within the estimated amount of time.

Activation
- Activation should be very simple. Phone numbers should be pre-entered.
- Activation should be a big, easy to click button. Only final address is needed.

Map tracking
- Get the user's location with the geolocation API
- Use google routes API to determine the route as a polyline. Check every n minutes if the user is within a threshold of the polyline.
- Ensure the user has reached home within a threshold of the estimated arrival home time.
- If user is off course, they will receive a notification about off course. User can either force ignore (override), or no response - then friends will be contacted. see below

Considerations for modes of transport
- Include support for driving (uber scenarios, rides with strangers), public transit, and walking.

### 2. Allow user friends to see the user's location. If any of the above conditions are broken, friends will receive a text. 

Limiting location sharing
- Potential solutions for limiting location sharing:
    1. Provide a securely generated link that can be shared with anyone
      - Provide a way to remove location sharing from a link. e.g. in case of sharing with the wrong person.
    3. Require sign-ins for those receiving the location

