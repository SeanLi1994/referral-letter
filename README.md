Electronic Referral Letter
===
Introduction
---
An electronic referral letter (ERL) is the advanced form of a traditional referral letter.  ERL can extract data from the FHIR Server, which is built on an advanced standard for storing healthcare data, for example, patients' context and observation data. In this case, preset healthcare data are easier and more convenient for GPs to handle.

In this project, the back-end structure including user authentication and data extraction from the FHIR Server referred to Cerner’s Browser-based app tutorial[^1]. I only did a few changes in [Cerner's JS file](assets/js/cerner.js) which are marked with green comments above the codes. While the front-end features are my own works.

In this README.md, I will include an instruction on how to access the live demo of the project and a brief description of the implemented features.

Live Demo
---
You can access the live demo of this app via [this link](https://launch.smarthealthit.org/?auth_error=&fhir_version_2=r2&iss=&launch_ehr=1&launch_url=https%3A%2F%2Fseanli1994.github.io%2Freferral-letter%2Flaunch.html&patient=smart-1288992&prov_skip_auth=1&prov_skip_login=1&provider=COREPRACTITIONER4&pt_skip_auth=1&public_key=&sde=&sim_ehr=1&token_lifetime=15&user_pt=).

The values of the form are already set up and you only need to click the green `Launch App!` button at the bottom of the page.

You'll then be redirected to the live demo of our project.

### Alternative
If the above method doesn't work, try as follows:
1. Go to [SMART Launcher](https://launch.smarthealthit.org)
2. Keep other sections as default and change these sections only:
    - **FHIR Version**, select 'R2'
    - **Patient(s)** and **Provider(s)**, select any patient or provider through clicking the drop down button. On a successful selection, both fields should change.
3. In the **App Launch URL** section at the bottom of the page, 
    - copy and paste in that section with this link: `https://seanli1994.github.io/referral-letter/launch.html`, which links to my repository.
4. Click the green `Launch App!` button beside the **App Launch URL** section,  you'll then be redirected to the live demo of our project.

Features
---
#### Back-End Features
1. Authentication
    - The project uses the Oauth2 authentication method for legally communicating with the FHIR server.
2. Data Extraction from FHIR Server
    - After authentication, the project can extract healthcare data from the FHIR server.
3. Patient Data Display
    - After acquiring the healthcare data from the FHIR server, the data can be displayed on the webpages.

#### Front-End Features
1. Responsive Design
    - The webpages are responsive which means the pages can be displayed normally on different screen sizes.
2. Dropdown Information
    - In the **Patient Resource Options** section on the index page, the healthcare data are hidden to avoid cognitive overload. The data can be displayed normally by a simple left-click on the options.
3. Optional Display of Patient Resources
    - Also in the **Patient Resource Options** section on the index page, the checkboxes can be checked so that the included healthcare data will be displayed on the Structured Letter page.
4. Multiple Templates
    - In the **Form Options** section on the index page, users can choose from two letter options, which means users will be directed to corresponding letter forms after clicking the `Submit` button at the bottom of this page.
5. Preview and Print Function
    - On the letter pages, users can view the data they've input on the index page and choose to print or go back to the index page.


### Reference
[^1]: “SMART on FHIR app tutorial”. https://engineering.cerner.com/smart-on-fhir-tutorial/ (accessed Nov. 11, 2021).
