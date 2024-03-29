# react-native-test-app
React-native application for fetching top-rated movies from **The Movie Database API (https://developers.themoviedb.org/3/movies/get-top-rated-movies)**

### Steps
1. Clone the repository.
2. yarn install.
3. cd ios.
4. pod install.
5. Now you can run both iOS and Android apps.

### Features And Technologies Used 

**1. Atomic Design Pattern**
  - Atomic Design is a design principle that allows the splitting of UI code into smaller low level chunks (Components) and build it bottom-up to a fully functional page or application.

**2. Redux**

<table>
  <tr>
    <td>Pros</td>
    <td>Cons</td>
  </tr>
  <tr>
    <td>
      * Persist data when you are logging into the application if there is no internet connection,Here I have used AsyncStorage to save the latest           movie list and fetch them if there is no internet connection. <br/>
      * Makes Debugging Easier
    </td>
    <td> 
      * Learning curve - setup and configuration complexity
    </td> 
  </tr>
</table>

**3. Styled-Components**
  - Make styles clean and easier. You cab write actual CSS in your JavaScript.

**4. Unit tests**
  - Used Jest Enzyme
   
   
### App Screenshots (iOS)
<table>
  <tr>
    <td>Home-first page list</td>
    <td>Home-second page list</td>
    <td>Pull Refresh</td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/175801912-5c20bbce-bbf6-48f4-ba61-19cc2c425b98.png" width=600 height=700>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/175802156-2cb75f89-38a4-4c33-9e06-bee2c7d1dae9.png" width=600 height=700>         </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/175802185-e5388f74-9252-44f2-b4cd-223ab8a51673.png" width=600 height=700>         </td>
  </tr>
</table>


<table>
  <tr>
    <td>Notify user if there’s no internet connection</td>
    <td>Message when pull refresh if there’s no internet connection</td>
    <td>Pre-fetched data if there’s no internet connection</td>
  </tr>
  
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/175802258-134df242-d917-43a9-b438-67e92385301e.png" width=600 height=700>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/175802294-ad1d4733-1118-4330-a7b1-bde87cc3beb7.png" width=600 height=700>         </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/175802258-134df242-d917-43a9-b438-67e92385301e.png" width=600 height=700>         </td>
  </tr>
</table>

<table>
  <tr>
    <td>Indication when the app is loading data </td>
    <td>Error if the API key is invalid </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/175804413-57cc25aa-2840-47c0-8435-e2cb5569123e.png" width=300 height=700>
    </td>
     <td>
      <img src="https://user-images.githubusercontent.com/19740478/175807509-2d45cdd5-f499-4f22-9a39-1b22c9cc8539.png" width=300 height=700>
    </td>
  </tr>
</table>

<hr/>

### App Screenshots (Android)
<table>
  <tr>
    <td>Home-first page list</td>
    <td>Home-second page list</td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/175802446-e56f8252-cad0-4b05-9aec-55c83488d6a8.png" width=600 height=800>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/175802466-f8de2d2b-ba03-40f6-bd72-a3302defeced.png" width=600 height=800>         </td>
  </tr>
</table>


