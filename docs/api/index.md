# itslearning-sdk

A lightweight SDK for itslearning's REST API, written in TypeScript. This SDK provides easy access to various itslearning APIs, enabling seamless integration and interaction with itslearning services within your applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Initialization](#initialization)
  - [Authentication](#authentication)
  - [API Examples](#api-examples)
- [API Reference](#api-reference)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#disclaimer)
- [Author](#author)
- [Repository](#repository)

## Features

- **Comprehensive API Coverage**: Access various itslearning endpoints such as Calendar, Courses, Instant Messages, Notifications, Planner, and more.
- **TypeScript Support**: Strongly typed interfaces and classes ensure type safety and better developer experience.
- **Easy Authentication**: Manage OAuth2 tokens effortlessly.
- **Modular Design**: Each API is encapsulated within its own class for organized and maintainable code.
- **Built with Modern Tools**: Utilizes `tsup` for bundling, `barrelsby` for barrel file generation, and `biome` for linting and formatting.

## Installation

Ensure you have [Node.js](https://nodejs.org/) (version 16 or higher) or [Bun](https://bun.sh/) installed.

### Using npm

```bash
npm install itslearning-sdk
```

## Usage

### Initialization

First, import and initialize the SDK with your configuration.

```typescript
import { ItsLearningSDK, SDKConfig } from 'itslearning-sdk';

// Define your SDK configuration
const config: SDKConfig = {
  clientId: 'YOUR_CLIENT_ID',
  redirectUri: 'YOUR_REDIRECT_URI',
  baseURL: 'https://api.itslearning.com',
  accessToken: 'YOUR_ACCESS_TOKEN', // Optional
  refreshToken: 'YOUR_REFRESH_TOKEN', // Optional
};

// Initialize the SDK
const sdk = new ItsLearningSDK(config);
```

### Authentication

Manage your OAuth2 tokens using the `AuthManager` and `TokenAPI`.

```typescript
// Get the authorization URL
const authUrl = sdk.auth.getAuthorizationUrl('your_state', ['Calendar', 'Courses']);
console.log(`Authorize the app by visiting this URL: ${authUrl}`);

// Exchange authorization code for tokens
sdk.token.getAccessToken('AUTHORIZATION_CODE')
  .then(tokenResponse => {
    console.log('Access Token:', tokenResponse.access_token);
    // Save tokens as needed
  })
  .catch(error => {
    console.error('Error exchanging code for token:', error);
  });

// Refresh the access token
sdk.token.refreshAccessToken('YOUR_CLIENT_ID', 'YOUR_REFRESH_TOKEN')
  .then(newTokenResponse => {
    console.log('New Access Token:', newTokenResponse.access_token);
    // Update tokens as needed
  })
  .catch(error => {
    console.error('Error refreshing token:', error);
  });
```

### API Examples

#### Fetching Calendar Events

```typescript
sdk.calendar.getEvents(new Date('2024-01-01'))
  .then(events => {
    console.log('Calendar Events:', events);
  })
  .catch(error => {
    console.error('Error fetching calendar events:', error);
  });
```

#### Managing Courses

```typescript
// Search for participants
sdk.courses.searchParticipants(12345, 'John Doe')
  .then(participants => {
    console.log('Found Participants:', participants);
  })
  .catch(error => {
    console.error('Error searching participants:', error);
  });

// Add participants to a course
const participantsToAdd = [
  { PersonId: 1, CourseProfileId: 101 },
  { PersonId: 2, CourseProfileId: 102 },
];

sdk.courses.addParticipants(12345, participantsToAdd)
  .then(() => {
    console.log('Participants added successfully.');
  })
  .catch(error => {
    console.error('Error adding participants:', error);
  });
```

## API Reference

The SDK exposes various APIs encapsulated within classes. Below is a brief overview of the available APIs:

- **AuthManager & TokenAPI**: Handle authentication, token exchange, and refresh.
- **CalendarAPI**: Interact with personal calendar events.
- **CoursesAPI**: Manage courses, participants, and related resources.
- **InstantMessagesAPI**: Send, receive, and manage instant messages.
- **InstantMessageBroadcastAPI**: Broadcast instant messages.
- **NotificationsPostAPI**: Post and manage notifications.
- **PersonAPI**: Retrieve and update user profiles.
- **PlannerAPI**: Access and manage planner data.
- **TaskListDailyWorkflowAPI**: Retrieve daily workflow tasks.
- **TasksAPI**: Manage tasks related to courses and users.
- **WorkloadAPI**: Access workload information for students and courses.
- **SitesAPI**: Interact with site-related data.
- **SsoAPI**: Generate Single Sign-On URLs.
- **LtiExtensionAPI**: Manage LTI extensions.
- **NativeAppAPI**: Utility methods for native applications.
- **SearchDataAPI**: Post search data (internal use).

For detailed information on each API and its methods, refer to the TypeScript declarations in the `index.d.ts` file or consult the [itslearning REST API Documentation](https://www.itslearning.com/restapi/help).

## Configuration

The SDK can be configured using the `SDKConfig` interface:

```typescript
interface SDKConfig {
  clientId?: string;
  redirectUri?: string;
  baseURL?: string;
  accessToken?: string;
  refreshToken?: string;
}
```

- **clientId**: Your application's client ID for OAuth2 authentication.
- **redirectUri**: The URI to redirect to after authentication.
- **baseURL**: The base URL for the itslearning API.
- **accessToken**: (Optional) The OAuth2 access token.
- **refreshToken**: (Optional) The OAuth2 refresh token.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**: Click the [Fork](https://github.com/DanielZ1337/itslearning-sdk.git) button.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/itslearning-sdk.git
   ```
3. **Navigate to the project directory**:
   ```bash
   cd itslearning-sdk
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
6. **Make your changes** and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request**: Go to the original repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](_media/LICENSE) file for details.

## Disclaimer

itslearning-sdk is in no way affiliated with itslearning.

## Author

**Daniel Bermann Schmidt**
[\<danielz@danielz.dev\>](mailto:danielz@danielz.dev)

## Repository

[itslearning-sdk](https://github.com/DanielZ1337/itslearning-sdk.git)
