#!/bin/bash

# Variables
css_file="style.css"
variables_file="variables.css"
base_file="base.css"
header_file="layout/header.css"
footer_file="layout/footer.css"
scroll_file="layout/scroll-to-top.css"
parallax_file="components/parallax.css"
about_file="components/about.css"
research_file="components/research.css"
brands_file="components/brands.css"
production_file="components/production.css"
news_file="components/news.css"
certifications_file="components/certifications.css"
partners_file="components/partners.css"
products_file="components/products.css"
contact_file="pages/contact.css"

# Extract CSS Variables
echo "/* CSS Variables */" > $variables_file
grep -A 7 ":root" $css_file >> $variables_file

# Extract Base Styles
echo "/* Base Styles */" > $base_file
sed -n '/\* {/,/}/p' $css_file >> $base_file
sed -n '/body {/,/}/p' $css_file >> $base_file

# Extract Scroll-to-top Styles
echo "/* Scroll-to-top Styles */" > $scroll_file
sed -n '/#scroll-to-top {/,/#scroll-to-top i {/p' $css_file >> $scroll_file
sed -n '/#scroll-to-top i {/,/}/p' $css_file >> $scroll_file

# Extract Header Styles
echo "/* Header Styles */" > $header_file
sed -n '/\/\* Navbar Styles \*\//,/}/p' $css_file >> $header_file

# Extract Footer Styles
echo "/* Footer Styles */" > $footer_file
sed -n '/\/\* Footer Styles \*\//,/cssCopy/p' $css_file >> $footer_file
sed -n '/\.footer-col ul {/,/\.footer-col \.social-links a:hover {/p' $css_file >> $footer_file
sed -n '/\.footer-col \.social-links a:hover {/,/}/p' $css_file >> $footer_file

# Extract Parallax Section Styles
echo "/* Parallax Section Styles */" > $parallax_file
sed -n '/\/\* Parallax Section \*\//,/}/p' $css_file >> $parallax_file

# Extract About Section Styles
echo "/* About Section Styles */" > $about_file
sed -n '/\/\* About Section \*\//,/}/p' $css_file >> $about_file

# Extract Research Section Styles
echo "/* Research Section Styles */" > $research_file
sed -n '/\/\* Research Section \*\//,/}/p' $css_file >> $research_file

# Extract Brands Styles
echo "/* Brands Carousel Styles */" > $brands_file
sed -n '/\/\* Brands Carousel \*\//,/}/p' $css_file >> $brands_file

# Extract Production Section Styles
echo "/* Production Section Styles */" > $production_file
sed -n '/\/\* Production Section \*\//,/}/p' $css_file >> $production_file

# Extract News Section Styles
echo "/* News Section Styles */" > $news_file
sed -n '/\/\* News Section \*\//,/}/p' $css_file >> $news_file

# Extract Certifications Styles
echo "/* Certifications Styles */" > $certifications_file
sed -n '/\/\* Certifications \*\//,/}/p' $css_file >> $certifications_file

# Extract Partners Section Styles
echo "/* Partners Section Styles */" > $partners_file
sed -n '/\/\* Partners Section \*\//,/}/p' $css_file >> $partners_file

# Extract Product Styles
echo "/* Product Styles */" > $products_file
sed -n '/\/\* Product Styles \*\//,/}/p' $css_file >> $products_file

# Extract Contact Page Styles
echo "/* Contact Page Styles */" > $contact_file
sed -n '/\/\* Contact Page \*\//,/}/p' $css_file >> $contact_file

# Extract Media Queries and distribute to appropriate files
sed -n '/\/\* Media Queries \*\//,/}/p' $css_file | while IFS= read -r line; do
  if [[ $line == *"parallax-section"* ]]; then
    echo "$line" >> $parallax_file
  elif [[ $line == *"inner-menu-food"* ]]; then
    echo "$line" >> $about_file
  elif [[ $line == *"card"* ]]; then
    echo "$line" >> $research_file
  elif [[ $line == *"about2"* || $line == *"about-content2"* || $line == *"myimageabout"* ]]; then
    echo "$line" >> $news_file
  elif [[ $line == *"product-row"* || $line == *"product"* ]]; then
    echo "$line" >> $products_file
  elif [[ $line == *"content-container"* || $line == *"map"* ]]; then
    echo "$line" >> $contact_file
  elif [[ $line == *"food-main-content"* ]]; then
    echo "$line" >> $production_file
  fi
done

echo "CSS files have been successfully extracted and organized."