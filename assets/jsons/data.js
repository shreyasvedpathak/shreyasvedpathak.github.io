// Skills section
// Format: { skill display name: skill display image file name without externsion }
var prog = {
  C: "c",
  "C++": "c-plusplus",
  Python: "python",
  R: "r-lang",
};

var ds = {
  Pandas: "pandas",
  NumPy: "numpy",
  OpenCV: "opencv",
  "scikit-learn": "scikit-learn",
  TensorFlow: "tensorflow",
  PyTorch: "pytorch",
};

var wd = {
  HTML: "html-5",
  CSS: "css-3",
  JavaScript: "javascript",
  Flask: "flask",
  MySQL: "mysql",
  MongoDB: "mongodb",
};

var port = [
  {
    type: "paper",
    image: "pcos.png",
    title:
      "PCOcare: PCOS Detection and Prediction using Machine Learning Algorithms (Paper)",
    link: "https://www.researchgate.net/publication/348627784_PCOcare_PCOS_Detection_and_Prediction_using_Machine_Learning_Algorithms",
    date: "December, 2020",
    desc: "",
    keywords: ["Machine Learning", "Healthcare", "Data Analysis"],
  },
  {
    type: "paper",
    image: "genomics.jpg",
    title: "Genomics, High Performance Computing and Machine Learning",
    link: "https://www.researchgate.net/publication/352869810_Genomics_High_Performance_Computing_and_Machine_Learning",
    date: "June, 2021",
    desc: "",
    keywords: [
      "Machine Learning",
      "Deep Learning",
      "High Performance Computing",
      "Genomics",
    ],
  },
  {
    type: "paper",
    image: "nano.jpg",
    title:
      "Segmentation of Fire and Smoke in Nano-Satellite Imagery using Mask R-CNN and Res-UNet",
    link: "",
    date: "",
    desc: "",
    keywords: ["Deep Learning", "Computer Vision", "Image Segmentation"],
  },
  {
    type: "work",
    image: "pcos.png",
    title:
      "PCOcare: PCOS Detection & Prediction using Machine Learning (Project)",
    link: "https://www.kaggle.com/shreyasvedpathak/pcocare-pcos-detection-prediction-using-ml",
    date: "",
    desc: "",
    keywords: [
      "Machine Learning",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Healthcare",
    ],
  },
  // {
  //   type: "work",
  //   image: "tensorflow.png",
  //   title: "deeplearning.ai - Tensorflow: Advanced Techniques Solutions",
  //   link: "https://github.com/shreyasvedpathak/Tensorflow-Advanced-Techniques-Solutions",
  //   date: "",
  // },
  // {
  //   type: "work",
  //   image: "pytorch.png",
  //   title: "deeplearning.ai - Generative Adversarial Networks GANs Solutions",
  //   link: "https://github.com/shreyasvedpathak/Generative-Adversarial-Networks",
  //   date: "",
  // },
  {
    type: "work",
    image: "hardhat.png",
    title:
      "Hardhat Detection with Dynamic Bounding Boxes using Tensorflow Object Detection API",
    link: "https://colab.research.google.com/drive/17F9A3hWmNoorzMvWrol5D3Ko3ph34pPb",
    date: "",
    desc: "Detecting Hardhat in Real time and drawing bounding boxes according to the Hardhat color, for security reasons.",
    keywords: [
      "Deep Learning",
      "Computer Vision",
      "Object Detection",
      "TensorFlow",
    ],
  },
  {
    type: "work",
    image: "grocery.jpg",
    title: "Grocery Detection: Detect Products from the Shelf using YOLOV5",
    link: "https://colab.research.google.com/github/shreyasvedpathak/grocery-detection/blob/main/sourcecode/Grocery%20Detection.ipynb",
    date: "",
    desc: "",
    keywords: [
      "Deep Learning",
      "Computer Vision",
      "Object Detection",
      "PyTorch",
      "YOLOV5"
    ],
  },
  {
    type: "work",
    image: "loan.png",
    title: "Loan Management System - Flask API",
    link: "https://github.com/shreyasvedpathak/loan-management-api",
    date: "",
    desc: "",
    keywords: ["Flask", "API", "SQLALCHEMY", "sqlite"],
  },
  {
    type: "work",
    image: "titanic.jpg",
    title: "Kaggle Competition: Titanic Survival Prediction - Top 4%",
    link: "https://www.kaggle.com/shreyasvedpathak/titanic-survival-prediction-top-4",
    date: "",
    desc: "",
    keywords: ["Machine Learning", "Exploratory Data Analysis", "Competition"],
  },
  {
    type: "work",
    image: "data-structures.png",
    title: "Data Structures and Algorithms in Python3",
    link: "https://github.com/shreyasvedpathak/Data-Structure-Python",
    date: "",
    desc: "",
    keywords: [
      "Stack",
      "Binary Tree",
      "Linked List",
      "Heap",
      "Queue",
      "Hashtable",
      "Sorting",
      "Searching",
    ],
  },
];

var CC = [
  {
    title: "DeepLearning.AI TensorFlow Developer",
    by: "deeplearning.ai",
    learnings: [
      "Best practices for TensorFlow, a popular open-source machine learning framework to train a neural network for a computer vision applications.",
      "Handle real-world image data and explore strategies to prevent overfitting, including augmentation and dropout.",
      "Build natural language processing systems using TensorFlow.",
      "Apply RNNs, GRUs, and LSTMs as you train them using text repositories.",
    ],
    link: "https://coursera.org/share/d7a98b114f8f859451b40a1d4d609fa4",
    keywords: [
      "Computer Vision",
      "Convolutional Neural Network",
      "Machine Learning",
      "Natural Language Processing",
      "Sequence Models and Time Series",
    ],
  },
  {
    title: "TensorFlow: Advanced Techniques",
    by: "deeplearning.ai",
    learnings: [
      "Understand the underlying basis of the Functional API and build exotic non-sequential model types, custom loss functions, and layers.",
      "Learn optimization and how to use GradientTape & Autograph, optimize training in different environments with multiple processors and chip types.",
      "Practice object detection, image segmentation, and visual interpretation of convolutions.",
      "Explore generative deep learning, and how AIs can create new content, from Style Transfer through Auto Encoding and VAEs to GANs.",
    ],
    link: "https://coursera.org/share/e4553f62ae4cfdab2648bf929841e924",
    keywords: [
      "Model Interpretability",
      "Custom and Exotic Models",
      "Generative Machine Learning",
      "Object Detection",
      "Image Segmentation",
      "Tensorflow Object Detection API"
    ],
  },
  {
    title: "Generative Adversarial Networks (GANs)",
    by: "deeplearning.ai",
    learnings: [
      "Understand GAN components, build basic GANs using PyTorch and advanced DCGANs using convolutional layers, control your GAN and build conditional GAN.",
      "Compare generative models, use FID method to assess GAN fidelity and diversity, learn to detect bias in GAN, and implement StyleGAN techniques.",
      "Use GANs for data augmentation and privacy preservation, survey GANs applications, and examine and build Pix2Pix and CycleGAN for image translation.",
    ],
    link: "https://coursera.org/share/c7b450b976c47861e4317070cc93358b",
    keywords: [
      "Generator",
      "Discriminator",
      "Improving GANs",
      "Image-to-Image Translation",
      "Generative Adversarial Networks",
    ],
  },
];
