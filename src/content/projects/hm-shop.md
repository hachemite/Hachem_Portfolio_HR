---
title: 'Shop♡Ease: AI-Powered Fashion Recommendation Platform'
year: 2026
description: 'A full-stack, AI-driven e-commerce platform processing 35GB of H&M transaction data using deep autoencoders, PCA, and GPU-accelerated clustering.'
stack: ['Angular 17', 'FastAPI', 'TensorFlow', 'RAPIDS cuML', 'SQLite']
image: '../../assets/images/projects_images/shop_hm/image.png'
featured: true
visible: true
---

# 🛍️ Shop♡Ease: Intelligent E-Commerce Solution

**Live Demo:** [Shop♡Ease Platform](https://hm-shop-hh7w.onrender.com/) _(Available until Feb 28, 2026)_

Welcome to **Shop♡Ease**, an advanced, full-stack e-commerce platform that bridges the gap between modern web development and deep learning. Built on top of the massive H&M Personalized Fashion dataset, this project demonstrates how to process millions of transactions, extract behavioral features, and serve intelligent recommendations in real-time.

**Watch the Platform Demonstration:**

<video src="https://github.com/user-attachments/assets/6f0b8d24-96aa-498d-90a1-ae217700d6d6" controls="controls" muted="muted" style="max-width: 100%;"></video>

---

## 🛑 The Problem

Modern e-commerce thrives on personalization. However, building a scalable recommendation engine presents several severe technical hurdles:

1. **The "Medium Data" Bottleneck:** Processing years of transaction logs (~35 GB) typically crashes standard RAM limits, requiring specialized ETL (Extract, Transform, Load) pipelines.
2. **High-Dimensional Features:** Combining item metadata (color, department, garment type) with behavioral data (price standard deviation, sales velocity) creates a sparse, high-dimensional matrix that classical clustering algorithms struggle to process efficiently.
3. **System Latency:** Real-time recommendations and image serving must be nearly instantaneous, which is difficult when querying across hundreds of thousands of active products.

## 💡 The Solution

We architected **Shop♡Ease** to tackle these problems at every layer of the stack, combining a memory-optimized data pipeline, GPU-accelerated Machine Learning models, and a highly decoupled SPA (Single Page Application) frontend.

---

## 🧠 Machine Learning & AI Engine

To generate "visually and behaviorally similar" recommendations, we engineered a comprehensive ML pipeline leveraging both deep learning and classical clustering.

### 1. Advanced Feature Engineering

Instead of relying solely on item categories, we built a hybrid feature matrix:

- **Content Features:** Categorical data (Graphical appearance, perceived colors, index groups) was processed using Label Encoding and One-Hot Encoding to capture visual similarity.
- **Behavioral Signals (The RAM Killers):** We extracted product "personalities" from the 35GB transaction log by calculating _Price Statistics_ (mean, max, std), _Sales Velocity_ (purchase frequency in the last 90 days), and _Customer Demographics_ (channel statistics).

### 2. Deep Autoencoders & PCA (Dimensionality Reduction)

To make clustering viable, we compressed the high-dimensional feature space using two approaches:

- **Deep Neural Network (Autoencoder):** We designed an MLP-based Autoencoder using **TensorFlow/Keras**. The architecture (`Input -> 128 -> Batch Normalization -> Dropout(0.2) -> 64 -> 32 Latent Space`) forces the network to learn a dense, 32-dimensional latent representation of every clothing item.
- **PCA:** We also benchmarked Principal Component Analysis to map the variance of the dataset into orthogonal components.

### 3. GPU-Accelerated Clustering (RAPIDS cuML)

Running K-Means and DBSCAN on hundreds of thousands of vectors on a CPU is painfully slow.

- We utilized **NVIDIA Tesla T4 GPUs** and the **RAPIDS `cuML`** library to execute K-Means (`cuKMeans`) and DBSCAN (`cuDBSCAN`).
- By offloading the matrix math to the GPU, we reduced clustering times from minutes to mere seconds.
- **Distance-Based Inference:** In production, the API utilizes Euclidean distance within the Autoencoder's 32D latent space to instantly return the top _K_ most similar items to the user's current selection.

---

## ⚙️ Data Engineering & Backend (FastAPI)

Handling the 35GB dataset on a constrained server required strict memory management.

- **Chunked ETL Pipeline:** We wrote a custom migration script (`converting_csv_db.py`) that streams the 35GB `transactions_train.csv` file in chunks of 500,000 rows. This allows us to aggregate data (like pre-calculating the average price per item) in RAM and dump it into an indexed SQLite database without ever exceeding memory limits.
- **In-Memory Image Serving:** Instead of doing expensive disk reads for thousands of product images, the FastAPI backend indexes a ZIP archive at startup and stores the file pointers in memory, serving bytes directly to the client with `Cache-Control` headers for ultra-fast load times.
- **JWT Authentication:** The REST API features secure, stateless authentication using `bcrypt` password hashing and JWT Bearer tokens.

---

## 🎨 Frontend Architecture (Angular 17)

The user interface was built to provide a premium, seamless shopping experience.

- **Component-Driven:** Built with **Angular 17**, the frontend strictly separates concerns into modular components (`BoutiqueComponent`, `ArticleComponent`, `PanierComponent`).
- **Reactive State:** Uses Angular services and RxJS Observables to manage the shopping cart state and user session globally.
- **Dynamic AI Integration:** When a user views an item, the frontend asynchronously fetches the pre-computed latent recommendations from the FastAPI backend, dynamically rendering "Similar Products" in an interactive, styled grid using **Tailwind CSS** concepts.

---

## 👥 About the Authors

This project was engineered by a dedicated team of Software Engineering and Artificial Intelligence students at the **National School of Applied Sciences (ENSA), Fès** (Class of 2026):

- **Malak Bensaid**
- **Hajar Slimani**
- **Douaa Berrahmo**
- **Hachem Squalli ElHoussaini**

and Supervised by **Asmaa Rassil**

We transformed theoretical ML concepts into a tangible, high-performance web application, demonstrating how complex data pipelines and deep learning models can be successfully integrated into modern e-commerce systems.
