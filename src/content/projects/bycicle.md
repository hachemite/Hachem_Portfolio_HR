---
title: 'Capital Bikeshare Demand Prediction'
year: 2025
description: 'Robust machine learning framework and web app forecasting hourly bike-sharing demand using advanced time-series modeling.'
stack: ['Python', 'CatBoost', 'LightGBM', 'Meteostat', 'Scikit-Learn']
image: '../../assets/images/projects_images/bycicle_paper/image.png'
featured: true
visible: true
---

## The Problem

Managing a large-scale Bike-Sharing System (BSS) like Washington D.C.'s Capital Bikeshare involves a constant logistical struggle: balancing demand with supply across the city. When stations run empty or overflow, service quality drops, and the cost of manually moving bikes via trucks can consume 15% to 20% of total operating costs.

Building a predictive model for this is exceptionally difficult due to:

- **Concept Drift:** The COVID-19 pandemic (2020-2021) completely altered human mobility, meaning historical commute data was deeply biased and no longer represented "normal" behavior.
- **Complex Dependencies:** Demand is highly volatile, relying on an intricate web of temporal trends (rush hours), immediate past demand (autocorrelation), and physiological weather comfort.
- **Noisy Data:** Raw meteorological data often contains physical impossibilities (e.g., absolute zero wind speeds) that skew machine learning predictions.

## The Solution

To solve this, I engineered a highly optimized predictive pipeline and wrapped it into an interactive web application for fleet managers. The core methodology focused heavily on data quality and feature engineering rather than just throwing raw data at an algorithm.

**Read the Full Research Paper:** [Robust Machine Learning Framework for Bike-Sharing Demand Prediction (PDF)](https://github.com/user-attachments/files/25757024/paper.pdf)  
**View the Project Presentation:** [Smart Urban Mobility Pitch Deck (PPTX)](https://github.com/user-attachments/files/25757027/presentation.pptx)

### 1. Concept Drift Mitigation & Data Engineering

Instead of using all historical data, I applied a "surgical removal" of the 2020-2021 pandemic era, filtering the dataset to the post-recovery regime (2022-2024). This restored the canonical bimodal commute peaks and dramatically improved model stability. I also corrected sensor impossibilities, such as replacing 0 km/h wind speeds with a 6 km/h baseline (1st percentile) to maintain physical realism.

### 2. High-Dimensional Feature Engineering

I transformed the raw timestamps and weather data into 36 specific features across several domains:

- **Cyclical Encoding:** Because 23:00 and 00:00 are chronologically adjacent but numerically distant, I converted hours, days, and months into continuous cyclical features using sine and cosine transformations to preserve circularity.
- **Solar Kinematics & Physiological Stress:** I calculated the solar elevation angle (which correlates with demand better than raw temperature) and the Australian Apparent Temperature to account for the cooling effect of wind and humidity on the human body.
- **Autoregressive Lags:** To give the model "memory", I introduced lag features (past demand from 1h, 24h, and 168h ago) alongside rolling means, turning it into a true time-series predictor.

### 3. Model Architecture (CatBoost)

I benchmarked five models (Linear Regression, Random Forest, XGBoost, LightGBM, CatBoost) using a rigorous 5-fold Time Series Cross-Validation to prevent data leakage.

**CatBoost** emerged as the superior architecture. It successfully handled the prediction shift utilizing "Ordered Boosting", ensuring the target value of a current object wasn't used to compute its own prediction gradient. Furthermore, its use of Oblivious Trees (symmetric structures) acted as a strong regularizer against overfitting to the high-dimensional lag features.

---

## The Results

By prioritizing clean, physically consistent data and advanced temporal feature engineering, the model achieved exceptional forecasting accuracy, ultimately minimizing forecasting error by 34% compared to standard baselines.

- **Predictive Accuracy:** The final CatBoost model achieved an $R^{2}$ of 0.9595, a Root Mean Squared Error (RMSE) of 111.27 bikes/hour, and a Mean Absolute Error (MAE) of 68.51 bikes/hour.
- **Ablation Validation:** An ablation study proved that the data preprocessing pipeline alone (removing the COVID era and fixing wind physics) was responsible for a nearly 49% improvement in the model's RMSE.
- **Business Value:** I deployed the model into a web app demo that allows city managers to visualize real-time weather impacts and predict exact hourly rental volumes, enabling proactive and cost-effective truck dispatching for bike rebalancing.

## 👥 About the Authors

This project was engineered by a dedicated team of Software Engineering and Artificial Intelligence students at the **National School of Applied Sciences (ENSA), Fès** (Class of 2025-2026):

- **Ilyas El Ogri**
- **Yassine Ouali**
- **Hachem Squalli El Houssaini**

and Supervised by **Hiba Chougrad**
