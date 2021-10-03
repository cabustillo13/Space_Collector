# Space Collector:earth_americas::rocket:
We are **Space Collector**, a multidisciplinary group of students and professionals gathered with the shared goal of expanding access to research and spatial information for the community in general.

![Image 0](https://github.com/cabustillo13/Space_Collector_Backend/blob/main/FRONTEND/demo_results/nasa_0.JPG)

<hr>

# BACKEND

<hr>

## 1) BRIEF AEROSPACE PHYSICAL THEORY :star:
A **two-line element set (TLE)** is a data format encoding a list of orbital elements of an Earth-orbiting object for a given point in time, the epoch. 
Using a suitable prediction formula, the state (position and velocity) at any point in the past or future can be estimated to some accuracy.

The **TLE data representation** is specific to the simplified perturbations models (SGP, SGP4, SDP4, SGP8 and SDP8), so any algorithm using a TLE as a data source must implement one of the SGP models to correctly compute the state at a time of interest.

The **TLE format** is a de facto standard for distribution of an Earth-orbiting object's orbital elements.

## 2) IMPLEMENTATION :white_check_mark:

We use **Orbit Predictor:** is a Python library to propagate orbits of Earth-orbiting objects (satellites, ISS, FENGYUN-1C, etc) using TLE (Two-Line Elements set), based on the SGP4 implementation.

The following spatial tests were analyzed: **_FENGYUN-1C, COSMOS-970, RUBIN-8 & PSLV R / B, RUBIN-4 & SL-8 R / B, MICROSAT-R DEB and ISS_**. The input .tle files were pulled from **Celestrak**. 

And as a result, we can determine for a given instant of time t:
1) Latitude, Longitude and Height.
2) Its position at that instant t.
3) Position, speed and mistake made.
4) Determine if it is possible to observe this object in our country.

**All the results were applied to our country Argentina (ARG).**

## 3) CODE :raised_hands:

Just download this reposiory and run our [main.ipynb](https://github.com/cabustillo13/Space_Collector_Backend/blob/main/BACKEND/main.ipynb).

## 4) RESULTS ANALYSIS FOR HUMANS:dart:

### :satellite: 4.1) FENGYUN-1C
**When does sat on ARG happen again?**
- 2021-10-03 22: 12: 22.855151

**For the date analyzed: 10/02/2021 - Time: 00 hs: 00 min**
- Position: (-1064.0592394617108, 5464.299827067381, -4607.142057958034)
- Speed: (2.3701221267458656, -4.246615675820121, -5.605410824794238)
- Estimated error: None

**Did this satellite pass through ARG at that moment?**
False


### :satellite: 4.2) COSMOS-970
**When does the sat happen again on ARG?**
- 2021-10-03 14: 52: 52.039996

**For the date analyzed: 10/02/2021 - Time: 00 hs: 00 min**
- Position: (-6081.133630702503, 4322.188936694305, 672.7760484793781)
- Speed: (- 2.149751825250676, -2.128111442378591, -6.599542110075268)
- Estimated error: None

**Did this satellite pass through ARG at that moment?**
False

### :satellite: 4.3) RUBIN-8 & PSLV R / B
**When does the sat happen again on ARG?**
- 2021-10-03 18: 49: 25.065949

**For the date analyzed: 10/02/2021 - Time: 00 hrs: 00 min**
- Position: (4586.481163344431, 5016.5059094992175, 1629.9003537441338)
- Speed: (1.9814251174607582, 0.5741439594696178, -7.277291551777174)
- Estimated error: None

**Did this satellite pass through ARG at that moment?**
False

### :satellite: 4.4) RUBIN-4 & SL-8 R / B
**When does the sat happen again on ARG?**
- 2021-10-03 17: 01: 44.844248

**For the date analyzed: 10/02/2021 - Time: 00 hrs: 00 min**
- Position: (-5717.817424965146, -4126.843135258802, -478.137351898629)
- Speed: (-0.22524822450832388, 1.156089090332316, -7.412947661395255)
- Estimated error: None

**Did this satellite pass through ARG at that moment?**
False

### :satellite: 4.5) MICROSAT-R DEB
**When does the sat happen again on ARG?**
- 2021-10-03 20: 34: 28.861189

**For the date analyzed: 10/02/2021 - Time: 00 hs: 00 min**
- Position: (340.6305323284987, -6361.078537406675, -3643.0477158545386)
- Speed: (-0.7226887162478327, -3.2645502875856685, 6.428455124184609)
- Estimated error: None

**Did this satellite pass through ARG at that moment?**
True

### :satellite: 4.6) ISS
**When does sat on ARG happen again?**
- 2021-10-03 18: 24: 55.952657

**For the date analyzed: 10/02/2021 - Time: 00 hs: 00 min**
- Position: (-6280.344678371433, -2218.522433242058, 616.5737715081176)
- Speed: (1.0706020376146572, -4.723614689684127, -6.014517733596158)
- Estimated error: None

**Did this satellite pass through ARG at that moment?**
False

## Bibliography:speech_balloon:


*   [Orbit Predictor](https://github.com/satellogic/orbit-predictor)
*   [Celestrak](https://celestrak.com/) 

<hr>

# FRONTEND

<hr>

## 1) IMPLEMENTATION :white_check_mark:

We use **WorldWind:** is an open source virtual globe API. WorldWind allows developers to quickly and easily create interactive visualizations of 3D globe, map and geographical information.

Because WorldWind is completely open source, extending the API is simple and easy to do.

## 2) CODE :raised_hands:

If you do not already have a web server, you can use a minimal development web server built in Node.js:

#### - Download and install Node:
```
Open a command line console in the root folder of your web app (where the ‘index.html’ file and your ‘./images’ folder is located).
In the command line console, run npm install http-server.
Execute the command http-server to start the server.
In your web browsear, head to the address http://localhost/:8080.
Another option is to use Python’s http.server:
```
#### - Download and install Python version 3.X.
```
Open a command line console in the root folder of your web app (where the ‘index.html’ file and your ‘./images’ folder is located).
In the command line console, run python -m http.server.
In your web browser, head to the address http://localhost/:8000.
```

More info about: [How to get started?](https://worldwind.arc.nasa.gov/web/get-started/#anchor)

## 3) RESULTS ANALYSIS FOR HUMANS:dart:

![Image 2](https://github.com/cabustillo13/Space_Collector_Backend/blob/main/FRONTEND/demo_results/nasa_2.JPG)
![Image 1](https://github.com/cabustillo13/Space_Collector_Backend/blob/main/FRONTEND/demo_results/nasa_1.png)


## Bibliography:speech_balloon:

- [World Wind NASA](https://worldwind.arc.nasa.gov/)
