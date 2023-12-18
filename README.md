# jr-backend-challenge

### Instructions

While this is a simple project to respect your time, please approach it as you would in a real production environment, explaining the trade-offs you needed to make in order to finish it in a reasonable time. 

You should be able to complete this project within 4 to 6 hours. This is not a hard limit. Once completed, please provide a rough estimate of how much time you invested into it. 

Feel free to ask any question to Loopstudio via email. 

### Deliverables

A Github repository that contains:

1. The implementation of the service
2. Instructions on how to install it, test it, and run it
3. A written explanation of the design choices you made, and how it meets both the functional and non-functional requirements.
4. A written explanation of any compromise or trade-off that you took because of time constraints.

### Assumptions

Feel free to assume anything you are not 100% sure and our answers doesn't provide you enough information. Please document those assumptions. 

# CountryVote Service

## Functional requirements

We are building CountryVote which is software that will help us to know which ones are the most famous and loved countries. This platform has to register user’s votes that will be limited by their email (just one vote per person assuming they don’t create multiple emails).

Please use the following public API (https://restcountries.com/#rest-countries) and implement an API that allows you to achieve the next behaviors:

1. Create a user along with their favorite country. For example: John Doe → Italy. Important note: only one vote per user will be allowed
2. Retrieve a list of the most 10 favs countries and include their details like name, official name, capital city, region, and sub-region.
