# Viberate Assignment

This is a React-based web application that displays artist data using dynamic visualizations. The project utilizes **React 19**, **React Router**, and **Nivo Charts** for interactive data visualization.

## Features

-   **Navigation Bar**: Allows users to select an artist.
-   **Artist Details**: Displays detailed information about the selected artist.
-   **Pie Chart Visualization**: Represents popularity data in different cities.
-   **Dynamic Styling**: Uses color generation for enhanced visuals.

## Tech Stack

-   **React 19**
-   **React Router** (for client-side routing)
-   **Nivo Charts** (for data visualization)
-   **TypeScript** (for static type checking)
-   **CSS Modules / LESS** (for styling)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/viberate-assignment.git
    cd viberate-assignment
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

4. Open your browser and go to:

    ```
    http://localhost:5173
    ```

    (if using Vite) or

    ```
    http://localhost:3000
    ```

    (if using Create React App)

## Project Structure

```
📂 public
 ├── logo-v.svg               # Public assets
📂 src
 ├── 📂 api                   # API functions and interfaces
 │    ├── api.ts
 │    ├── Interfaces.ts
 │    ├── Schemas.ts
 ├── 📂 assets                # Additional static assets
 ├── 📂 components            # Reusable components
 │    ├── ArtistCard.tsx
 │    ├── Graph.tsx
 │    ├── Navbar.tsx
 ├── 📂 images                # Image storage
 ├── 📂 routes                # Routing setup
 │    ├── router.tsx          # Main router
 │    ├── routePaths.ts       # Route paths configuration
 │    ├── 📂 artist
 │    │    ├── Artist.tsx
 │    ├── 📂 home
 │         ├── Home.tsx
 ├── 📂 styles                # Styling
 │    ├── 📂 less
 │    ├── basic.css
 │    ├── styles.css
 ├── App.tsx                  # Root component
 ├── config.ts                # Configuration file
 ├── main.tsx                 # Entry point
 ├── vite-env.d.ts            # Vite environment declarations
```

## Usage

1. **Select an Artist:** Click on an artist from the navigation bar.
2. **View Artist Details:** See their profile information and rankings.
3. **Explore Data Visualization:** A pie chart shows popularity by location.

## API Integration

This project fetches artist data from an API. The artist data structure follows this format:

```json
{
    "uuid": "artist-unique-id",
    "name": "Artist Name",
    "image": "https://link-to-image.jpg",
    "country": { "name": "Slovenia", "code": "SI" },
    "most_popular_in": [
        { "city": "Ljubljana", "value": "56" },
        { "city": "Maribor", "value": "22" }
    ]
}
```

## Future Improvements

-   Add **drawer functionality** to show navbar in drawer for smaller devices.
-   Add **search functionality** to filter artists.
-   Implement **dark mode** styling.
-   Enhance mobile responsiveness.

## License

This project is licensed under the **Vibrate License**.

---

**Author**: Maj Koren  
**GitHub**: [TasTyy](https://github.com/TasTyy)
