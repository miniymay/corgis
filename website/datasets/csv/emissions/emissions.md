---
permalink: /csv/emissions/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/EDGAR-logo.png"
     alt="emissions icon"
     role="presentation">

# Emissions CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/24/2019</span><br>
<span class='text-muted'>Tags: hospitals, health care, medical, hospital costs, hospital quality</span>

# Overview

The data set allows consumers to directly compare across hospitals performance measure information related to heart attack, emergency department care, preventive care, stroke care, and other conditions. The data is part of an Administration-wide effort to increase the availability and accessibility of information on quality, utilization, and costs for effective, informed decision-making.


<https://edgar.jrc.ec.europa.eu/>




# Download

Download the following file:

* <a href='../../datasets/csv/emissions/emissions.csv' download>emissions.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Country</td>
    <td>String</td> 
    <td>The name of a country</td>
    <td><code>"Afghanistan"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year of the emissions (1970-2012)</td>
    <td><code>1970</code></td>
</tr>

<tr>
    <td>Emissions.Type.CO2</td>
    <td>Float</td> 
    <td>The amount of carbon dioxide in kilo tons</td>
    <td><code>2670.0</code></td>
</tr>

<tr>
    <td>Emissions.Type.N2O</td>
    <td>Float</td> 
    <td>The amount of nitrous oxide in equivalent kilotons of CO2</td>
    <td><code>1820.0</code></td>
</tr>

<tr>
    <td>Emissions.Type.CH4</td>
    <td>Float</td> 
    <td>The amount of methane in equivalent kilotons of CO2</td>
    <td><code>12800.0</code></td>
</tr>

<tr>
    <td>Emissions.Sector.Power Industry</td>
    <td>Float</td> 
    <td>Emissions from the power industry; measured in equivalent kilotons of CO2.</td>
    <td><code>0.06</code></td>
</tr>

<tr>
    <td>Emissions.Sector.Buildings</td>
    <td>Float</td> 
    <td>Emissions from the infrastructure of buildings; measured in equivalent kilotons of CO2.</td>
    <td><code>0.58</code></td>
</tr>

<tr>
    <td>Emissions.Sector.Transport</td>
    <td>Float</td> 
    <td>Emissions from means of transportation; measured in equivalent kilotons of CO2.</td>
    <td><code>0.23</code></td>
</tr>

<tr>
    <td>Emissions.Sector.Other Industry</td>
    <td>Float</td> 
    <td>Emissions from the other industrical combustion; measured in equivalent kilotons of CO2.</td>
    <td><code>0.07</code></td>
</tr>

<tr>
    <td>Emissions.Sector.Other sectors</td>
    <td>Float</td> 
    <td>Emissions from various other sectors; measured in equivalent kilotons of CO2.</td>
    <td><code>0.53</code></td>
</tr>

<tr>
    <td>Ratio.Per GDP</td>
    <td>Float</td> 
    <td>The amount of green house gas emissions per $1,000 of GDP; measured in equivalent kilo tons of CO2.</td>
    <td><code>1.557705</code></td>
</tr>

<tr>
    <td>Ratio.Per Capita</td>
    <td>Float</td> 
    <td>The amount of green house gas emissions for each person; measured in equivalent kilo tons of CO2.</td>
    <td><code>0.0</code></td>
</tr>

</table>