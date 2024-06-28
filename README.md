# Scraper for Hong Kong Public Records Office Online Catalogue

## Description
This is a Javascript + jQuery scraper for quickly downloading search results from the Online Catalogue of the Public Records Office, a functionary of the Hong Kong SAR Government's Government Records Service. This code only collects public information that is openly accessible through the Online Catalogue, and its sole purpose is to help researchers accelerate the process of browsing and downloading such information in tabular format.

## How to use
Please consider contacting litienyi@mit.edu for a demonstration. To summarize in writing:
1. Go to the [Online Catalogue webpage](https://search.grs.gov.hk/en/index.xhtml). 
2. Enter and submit your query (type in keywords and press search). 
3. Add filters as necessary.
4. Open your browser console. (Command+Option+J for Google Chrome on Mac)
5. Paste scraper.js into your console.
6. Replace url0 in Line 1 of code with the URL of search results page.
7. Press enter to run code.
8. The word "done" will keep spawining in your console in batches. Wait until this process stops. The process should take a few seconds to up to a minute.
9. Type console.log(table) in your console. Press enter to submit. A table with your results should appear.
10. Copy this table into a Markdown (.md) file or into Excel for further perusal.

### **CAUTION**
Depending on your device's computing power, scraping too many results may crash your computer. Please save all your work before running this script. For your reference, my M1 MacBook Pro comfortably handled 1000 results and crashed when trying 23,000 results.

## More about the Online Catalogue
The Online Catalogue is a publicly accessible catalogue maintained by the Public Records Office within the Government Records Service within the Government of the Hong Kong Special Administrative Region of the People’s Republic of China. It is a resource frequently used by scholars of the region. Its listings, unless classified, are accessible in-person at the Public Records Office in Kwun Tong, Hong Kong. For more information about this database, please see the [Online Catalogue and linked webpages](https://search.grs.gov.hk/en/index.xhtml). 

## Additional disclaimers
-	All information collected using this code is publicly available through the online catalogue, and this code merely serves to accelerate the data-collection process for researchers. It does not grant access to information that is classified or otherwise inaccessible by searching in the Online Catalogue.
-	All information collected using this code is not automatically available for reproduction and publication. Researchers, please consult the Government Records Service and confer with officials to ensure that any use of this information abides by laws and regulations.

## Citation & acknowledgments
If you use this code, please email litienyi@mit.edu to discuss how to acknowledge it in your publications.