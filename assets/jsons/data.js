// Skills section
// Format: { skill display name: skill display image file name without externsion }
var prog = {
  C: "c",
  "C++": "c-plusplus",
  Python: "python",
  R: "r-lang",
  Golang: "go",
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
  },
  {
    type: "paper",
    image: "genomics.jpg",
    title: "Genomics, High Performance Computing and Machine Learning",
    link: "https://www.researchgate.net/publication/352869810_Genomics_High_Performance_Computing_and_Machine_Learning",
    date: "June, 2021",
  },
  {
    type: "work",
    image: "pcos.png",
    title:
      "PCOcare: PCOS Detection & Prediction using Machine Learning (Project)",
    link: "https://www.kaggle.com/shreyasvedpathak/pcocare-pcos-detection-prediction-using-ml",
    date: "",
  },
  {
    type: "work",
    image: "titanic.jpg",
    title: "Kaggle Competition: Titanic Survival Prediction - Top 4%",
    link: "https://www.kaggle.com/shreyasvedpathak/titanic-survival-prediction-top-4",
    date: "",
  },
  {
    type: "work",
    image: "tensorflow.png",
    title: "deeplearning.ai - Tensorflow: Advanced Techniques Solutions",
    link: "https://github.com/shreyasvedpathak/Tensorflow-Advanced-Techniques-Solutions",
    date: "",
  },
  {
    type: "work",
    image: "pytorch.png",
    title: "deeplearning.ai - Generative Adversarial Networks GANs Solutions",
    link: "https://github.com/shreyasvedpathak/Generative-Adversarial-Networks",
    date: "",
  },
  {
    type: "work",
    image: "data-structures.png",
    title: "Data Structures and Algorithms in Python3",
    link: "https://github.com/shreyasvedpathak/Data-Structure-Python",
    date: "",
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
  },
];