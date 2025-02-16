
# Configuring Build in Render

To deploy your site on Render, follow these steps:

1. **Create an Account on Render**:
   - Go to [Render](https://render.com/) and sign up for an account if you don't have one.

2. **Create a New Static Site**:
   - In the Render dashboard, click on the "New" button and select "Static Site".
   - Connect your GitHub repository to Render by following the prompts.

3. **Configure Build and Publish Settings**:
   - **Name**: Enter a name for your site.
   - **Branch**: Select the branch you want to deploy (e.g., `master` or `main`).
   - **Build Command**: Enter the command to build your site. For example, if you are using a static site generator like Jekyll, you might use:
     ```sh
     jekyll build
     ```
     If you are using a different build tool, enter the appropriate command.
   - **Publish Directory**: Enter the directory where the built files are located. For example, `_site` for Jekyll or `build` for Create React App.

4. **Add Your Custom Domain**:
   - In the Render dashboard, go to the settings of your static site.
   - Under the "Custom Domains" section, add your custom domain.
   - Follow the instructions to configure your DNS settings with FreeDNS to point to Render's servers.

5. **Deploy Your Site**:
   - Click on the "Create Static Site" button to start the deployment process.
   - Render will automatically build and deploy your site whenever you push changes to the selected branch.

By following these steps, you can configure the build and deploy your site on Render with a custom domain.
