---
permalink: /json/drugs/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/drugs-icon.png"
     alt="drugs icon"
     role="presentation">

# Drugs JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Ryan Whitcomb <rwhit94@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 5-18-16</span><br>
<span class='text-muted'>Tags: drugs, substances, drug usage</span>

# Overview

This dataset is about substance abuse (cigarettes, marijuana, cocaine, alcohol) among different age groups and states. Data was collected from individual states as part of the NSDUH study. The data ranges from 2002 to 2014. Some values were <i>imputed</i>, meaning that they are estimated. Both totals (in thousands of people) and rates (as a percentage of the population) are given.



<<a href='https://nsduhweb.rti.org/respweb/homepage.cfm'>https://nsduhweb.rti.org/respweb/homepage.cfm</a>>




# Download

Download the following file:

* <a href='../../datasets/json/drugs/drugs.json' download>drugs.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>State</td>
    <td>String</td> 
    <td>The state that this report was created for.</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was created for.</td>
    <td><code>2002</code></td>
</tr>

<tr>
    <td>Population.12-17</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (12 to 17 year olds) in this year from US Census data for this state.</td>
    <td><code>384241</code></td>
</tr>

<tr>
    <td>Population.12-20</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (12 to 20 year olds) in this year from US Census data for this state.</td>
    <td><code>582609</code></td>
</tr>

<tr>
    <td>Population.18-25</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (18 to 25 year olds) in this year from US Census data for this state.</td>
    <td><code>498410</code></td>
</tr>

<tr>
    <td>Population.26+</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (26 years old or older) in this year from US Census data for this state.</td>
    <td><code>2801413</code></td>
</tr>

<tr>
    <td>Rates.Pain Relievers Abuse Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used pain-relievers in the past year for non-medical purposes, among this age group.</td>
    <td><code>8.01</code></td>
</tr>

<tr>
    <td>Rates.Pain Relievers Abuse Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used pain-relievers in the past year for non-medical purposes, among this age group.</td>
    <td><code>12.98</code></td>
</tr>

<tr>
    <td>Rates.Pain Relievers Abuse Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used pain-relievers in the past year for non-medical purposes, among this age group.</td>
    <td><code>3.03</code></td>
</tr>

<tr>
    <td>Totals.Pain Relievers Abuse Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used pain-relievers in the past year for non-medical purposes, among this age group.</td>
    <td><code>3077</code></td>
</tr>

<tr>
    <td>Totals.Pain Relievers Abuse Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used pain-relievers in the past year for non-medical purposes, among this age group.</td>
    <td><code>6469</code></td>
</tr>

<tr>
    <td>Totals.Pain Relievers Abuse Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used pain-relievers in the past year for non-medical purposes, among this age group.</td>
    <td><code>8488</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Abuse Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>4.83</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Abuse Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>13.65</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Abuse Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>4.91</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Binge Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>8.23</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Binge Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>34.97</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Binge Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>16.45</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Dependence Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>1.67</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Dependence Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>5.54</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Dependence Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>2.41</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.In Minors.Abuse</td>
    <td>Float</td> 
    <td>The percentage of the population of minors (12-20 years old) who have binged alcohol in the past month. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>16.45</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.In Minors.Use</td>
    <td>Float</td> 
    <td>The percentage of the population of minors (12-20 years old) who have drank alcohol in the past month.</td>
    <td><code>24.88</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Need Treatment Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td>
    <td><code>4.65</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Need Treatment Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td>
    <td><code>13.2</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Need Treatment Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td>
    <td><code>4.65</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Perceptions of Risk.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td>
    <td><code>42.74</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Perceptions of Risk.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td>
    <td><code>37.64</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Perceptions of Risk.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td>
    <td><code>48.17</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used alcohol in the past month, among this age group.</td>
    <td><code>15.0</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used alcohol in the past month, among this age group.</td>
    <td><code>50.96</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used alcohol in the past month, among this age group.</td>
    <td><code>37.27</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Abuse Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>4.67</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Abuse Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>6.53</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Abuse Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>1.73</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.All Except Marijuana Used Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>5.36</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.All Except Marijuana Used Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>8.06</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.All Except Marijuana Used Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>2.73</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Cocaine Used Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cocaine in the past year among this age group.</td>
    <td><code>1.66</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Cocaine Used Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cocaine in the past year among this age group.</td>
    <td><code>5.49</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Cocaine Used Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cocaine in the past year among this age group.</td>
    <td><code>1.75</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Dependence Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>2.56</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Dependence Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>4.65</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Dependence Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>1.15</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Need Treatment Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that needs but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>4.25</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Need Treatment Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that needs but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>5.94</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Need Treatment Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that needs but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>1.28</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Used Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>9.65</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Used Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>15.94</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Used Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>4.57</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.New Users.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td>
    <td><code>5.97</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.New Users.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td>
    <td><code>6.23</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.New Users.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td>
    <td><code>0.09</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Perceptions of Risk.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives great risk in Smoking Marijuana once a month, among this age group.</td>
    <td><code>39.58</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Perceptions of Risk.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives great risk in Smoking Marijuana once a month, among this age group.</td>
    <td><code>30.97</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Perceptions of Risk.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives great risk in Smoking Marijuana once a month, among this age group.</td>
    <td><code>52.76</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past month among this age group.</td>
    <td><code>6.37</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past month among this age group.</td>
    <td><code>12.47</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past month among this age group.</td>
    <td><code>2.6</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past year among this age group.</td>
    <td><code>12.75</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past year among this age group.</td>
    <td><code>23.79</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past year among this age group.</td>
    <td><code>5.03</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Cigarette Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td>
    <td><code>13.69</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Cigarette Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td>
    <td><code>39.24</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Cigarette Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td>
    <td><code>25.88</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Perceptions of Risk.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives great risk in smoking one or more packs of cigarettes per day, among this age group.</td>
    <td><code>62.18</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Perceptions of Risk.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives great risk in smoking one or more packs of cigarettes per day, among this age group.</td>
    <td><code>62.28</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Perceptions of Risk.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that perceives great risk in smoking one or more packs of cigarettes per day, among this age group.</td>
    <td><code>70.21</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Use Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>16.66</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Use Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>45.2</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Use Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>33.07</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Abuse Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>1855</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Abuse Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>6803</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Abuse Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>13754</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Binge Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>3162</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Binge Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>17429</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Binge Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>46083</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Dependence Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>641</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Dependence Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>2761</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Dependence Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>6751</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.In Minors.Abuse</td>
    <td>Integer</td> 
    <td>The estimated number of minors (12-20 years old) who have binged alcohol in the past month. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td>
    <td><code>9583</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.In Minors.Use</td>
    <td>Integer</td> 
    <td>The estimated number of minors (12-20 years old) who have drank alcohol in the past month.</td>
    <td><code>14495</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Need Treatment Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td>
    <td><code>1786</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Need Treatment Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td>
    <td><code>6579</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Need Treatment Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td>
    <td><code>13026</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Perceptions of Risk.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td>
    <td><code>16422</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Perceptions of Risk.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td>
    <td><code>18760</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Perceptions of Risk.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td>
    <td><code>134944</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td>
    <td><code>5763</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td>
    <td><code>25398</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td>
    <td><code>104408</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Abuse Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>1794</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Abuse Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>3254</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Abuse Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>4846</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.All Except Marijuana Used Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>2059</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.All Except Marijuana Used Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>4017</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.All Except Marijuana Used Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>7647</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Cocaine Used Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td>
    <td><code>637</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Cocaine Used Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td>
    <td><code>2736</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Cocaine Used Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td>
    <td><code>4902</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Dependence Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>983</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Dependence Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>2317</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Dependence Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td>
    <td><code>3221</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Need Treatment Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that need but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>1633</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Need Treatment Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that need but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>2960</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Need Treatment Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that need but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>3585</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Used Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>3707</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Used Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>7944</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Used Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td>
    <td><code>12802</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.New Users.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td>
    <td><code>2293</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.New Users.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td>
    <td><code>3105</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.New Users.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td>
    <td><code>252</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Perceptions of Risk.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive great risk in Smoking Marijuana once a month, among this age group.</td>
    <td><code>15208</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Perceptions of Risk.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive great risk in Smoking Marijuana once a month, among this age group.</td>
    <td><code>15435</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Perceptions of Risk.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive great risk in Smoking Marijuana once a month, among this age group.</td>
    <td><code>147802</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td>
    <td><code>2447</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td>
    <td><code>6215</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td>
    <td><code>7283</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td>
    <td><code>4899</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td>
    <td><code>11857</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td>
    <td><code>14091</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Cigarette Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td>
    <td><code>5260</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Cigarette Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td>
    <td><code>19557</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Cigarette Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td>
    <td><code>72500</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Perceptions of Risk.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive great risk in smoking one or more packs of cigarettes per day, among this age group.</td>
    <td><code>23892</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Perceptions of Risk.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive great risk in smoking one or more packs of cigarettes per day, among this age group.</td>
    <td><code>31040</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Perceptions of Risk.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that perceive great risk in smoking one or more packs of cigarettes per day, among this age group.</td>
    <td><code>196687</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Use Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>6401</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Use Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>22528</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Use Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>92642</code></td>
</tr>

</table>