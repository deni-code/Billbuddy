# BillBuddy - Expense Split Calculator

BillBuddy is a simple web app that helps you split bills among friends, including tax and tip calculations, with sharable results. Built with HTML, CSS, and JavaScript, it’s lightweight and easy to deploy.

## Features
- Input total bill amount, tax rate, tip percentage, and number of people.
- Calculates the total bill including tax and tip.
- Splits the bill evenly among the specified number of people.
- Share the results via the Web Share API or by copying to the clipboard.
- Responsive design with a clean, modern UI using a custom color scheme (#584655, #EDCE8E, #FCBC46, #F97D4F).

## Project Structure
```
BillBuddy/
│
├── index.html      # Main HTML file with the app structure
├── styles.css      # CSS file for styling the app
├── script.js       # JavaScript file for the app logic
└── README.md       # Project documentation (this file)
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari).
- A code editor (e.g., VS Code).
- Basic knowledge of HTML, CSS, and JavaScript.

## Steps to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/BillBuddy.git
   cd BillBuddy
   ```
2. **Open the App**:
   - Open `index.html` in a web browser. Since the app uses only HTML, CSS, and JavaScript, no server is required.
   - Alternatively, use a local development server (e.g., with VS Code's Live Server extension) for a better development experience.

3. **Test the App**:
   - Enter the bill amount, tax rate, tip percentage, and number of people.
   - Click "Calculate Split" to see the results.
   - Click "Share Result" to share the results via the Web Share API (on supported devices) or copy to the clipboard.

### Customization
- **Colors**: Modify the `styles.css` file to change the color scheme. The current colors are:
  - Background: #EDCE8E (light teal)
  - Buttons: #F97D4F (orange)
  - Text/Accents: #584655 (dark purple)
  - Result Section: #FCBC46 (yellow-orange)
- **Features**: Add more features (e.g., uneven splitting, saving results) by extending `script.js`.

## Deployment Guide

### Deploying on Vercel
Vercel is a simple platform for deploying static web apps like BillBuddy.

1. **Install Vercel CLI** (optional, for local deployment management):
   ```bash
   npm install -g vercel
   ```
2. **Deploy the App**:
   - Push your project to a GitHub repository.
   - Log in to Vercel (via their website or CLI: `vercel login`).
   - Import your GitHub repository into Vercel.
   - Vercel will automatically detect the static site and deploy it. No additional configuration is needed since this is a static HTML app.
3. **Access Your App**:
   - Once deployed, Vercel will provide a URL (e.g., `https://billbuddy.vercel.app`).

### Alternative Hosting Options

#### Main Cloud Hosting Options
- **Netlify**:
  - Drag and drop the project folder into Netlify’s dashboard or connect your GitHub repository.
  - Netlify will deploy the static site automatically.
- **GitHub Pages**:
  - Enable GitHub Pages in your repository settings.
  - Set the source to the `main` branch.
  - Access the app at `https://your-username.github.io/BillBuddy`.

#### VPS Hosting
If you prefer a VPS (e.g., DigitalOcean, AWS EC2, or Linode):
1. Set up a VPS with a web server (e.g., Nginx or Apache).
2. Upload the project files to the server (e.g., via SCP or FTP).
   ```bash
   scp -r BillBuddy/* user@your-vps-ip:/var/www/html/
   ```
3. Configure the web server to serve the files:
   - For Nginx, ensure the root directory points to `/var/www/html`.
   - Restart the server: `sudo systemctl restart nginx`.
4. Access the app via your VPS’s IP address or domain.

#### Without Hosting (Local Use)
- Simply open `index.html` in a browser on any device.
- Share the folder with friends via USB, email, or a shared drive. No internet required.

## Contributing
Feel free to fork the repository, make changes, and submit a pull request. For major changes, please open an issue to discuss your ideas.

## License
This project is licensed under the MIT License.