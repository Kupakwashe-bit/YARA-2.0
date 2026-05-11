export interface ProjectDetail {
  id: string
  title: string
  description: string
  fullDescription: string
  tags: string[]
  category: "autonomous" | "ai" | "mechatronics"
  image: string
  status: "Completed" | "In Progress" | "Planning"
  teamSize: number
  duration: string
  year: string
  features: string[]
  challenges: string[]
  technologies: {
    name: string
    description: string
  }[]
  gallery: string[]
  outcomes: string[]
}

export const projectsData: Record<string, ProjectDetail> = {
  "campus-delivery-robot": {
    id: "campus-delivery-robot",
    title: "Campus Delivery Robot",
    description:
      "An autonomous delivery robot capable of navigating indoor environments with obstacle detection and package handoff.",
    fullDescription:
      "The Campus Delivery Robot is our flagship autonomous navigation project, designed to revolutionize on-campus logistics. This robot uses a combination of LiDAR, depth cameras, and ultrasonic sensors to navigate complex indoor environments while avoiding obstacles and pedestrians. The system integrates with a mobile app for package tracking and secure handoff authentication.",
    tags: ["ROS2", "Computer Vision", "Path Planning"],
    category: "autonomous",
    image: "/images/projects/delivery-robot.jpg",
    status: "In Progress",
    teamSize: 8,
    duration: "12 months",
    year: "2024",
    features: [
      "Autonomous navigation using SLAM algorithms",
      "Real-time obstacle detection and avoidance",
      "Secure package compartment with biometric access",
      "Mobile app integration for tracking and notifications",
      "Battery management with auto-charging capability",
      "Weather-resistant design for outdoor use",
    ],
    challenges: [
      "Implementing reliable indoor localization without GPS",
      "Handling dynamic obstacles like moving pedestrians",
      "Optimizing battery life for extended operation",
      "Ensuring secure package handoff authentication",
    ],
    technologies: [
      {
        name: "ROS2",
        description: "Robot Operating System for modular software architecture",
      },
      {
        name: "SLAM",
        description: "Simultaneous Localization and Mapping for navigation",
      },
      {
        name: "Computer Vision",
        description: "Object detection using depth cameras and neural networks",
      },
      {
        name: "Path Planning",
        description: "A* and RRT algorithms for optimal route calculation",
      },
    ],
    gallery: ["/images/projects/delivery-robot.jpg"],
    outcomes: [
      "Successfully completed 500+ test deliveries on campus",
      "Achieved 95% delivery success rate",
      "Reduced average delivery time by 40%",
      "Patent pending for secure handoff mechanism",
    ],
  },
  "smart-waste-sorter": {
    id: "smart-waste-sorter",
    title: "Smart Waste Sorter",
    description:
      "AI-powered waste sorting system using computer vision to categorize and sort recyclables automatically.",
    fullDescription:
      "The Smart Waste Sorter addresses the critical challenge of waste management by automating the sorting process. Using advanced computer vision and machine learning, the system identifies and categorizes waste items into recyclables, compostables, and landfill materials with high accuracy. The robotic arm then physically sorts items into appropriate bins, making recycling more efficient and accessible.",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    category: "ai",
    image: "/images/projects/waste-sorter.jpg",
    status: "Completed",
    teamSize: 6,
    duration: "8 months",
    year: "2023",
    features: [
      "Real-time waste classification with 94% accuracy",
      "Multi-category sorting: plastic, metal, paper, glass, organic",
      "Conveyor belt integration for continuous operation",
      "Cloud dashboard for monitoring and analytics",
      "Self-learning system that improves over time",
      "Low-power operation suitable for remote locations",
    ],
    challenges: [
      "Training models on diverse waste item appearances",
      "Handling contaminated or damaged items",
      "Achieving real-time processing speeds",
      "Building a robust mechanical sorting mechanism",
    ],
    technologies: [
      {
        name: "TensorFlow",
        description: "Deep learning framework for image classification",
      },
      {
        name: "Python",
        description: "Primary programming language for AI development",
      },
      {
        name: "OpenCV",
        description: "Image processing and computer vision library",
      },
      {
        name: "Raspberry Pi",
        description: "Edge computing platform for real-time inference",
      },
    ],
    gallery: ["/images/projects/waste-sorter.jpg"],
    outcomes: [
      "Deployed in 3 campus cafeterias",
      "Increased recycling rates by 60%",
      "Processed over 10,000 items in pilot program",
      "Won Best Sustainability Project award",
    ],
  },
  "agricultural-drone": {
    id: "agricultural-drone",
    title: "Agricultural Drone",
    description:
      "Precision agriculture drone system for crop monitoring and irrigation optimization using multispectral imaging.",
    fullDescription:
      "Our Agricultural Drone system brings precision farming capabilities to local farmers. Equipped with multispectral cameras and advanced sensors, the drone captures detailed crop health data that helps optimize irrigation, detect diseases early, and improve overall yield. The accompanying software platform provides actionable insights and integrates with existing farm management systems.",
    tags: ["Drone", "Sensors", "IoT"],
    category: "autonomous",
    image: "/images/projects/agricultural-drone.jpg",
    status: "Completed",
    teamSize: 5,
    duration: "10 months",
    year: "2023",
    features: [
      "Multispectral imaging for NDVI analysis",
      "Automated flight path planning",
      "Real-time crop health monitoring",
      "Disease and pest detection alerts",
      "Integration with irrigation systems",
      "Cloud-based data analytics platform",
    ],
    challenges: [
      "Achieving stable flight in varying weather conditions",
      "Processing large volumes of imaging data efficiently",
      "Calibrating sensors for accurate readings",
      "Ensuring compliance with aviation regulations",
    ],
    technologies: [
      {
        name: "Pixhawk",
        description: "Open-source flight controller for autonomous operation",
      },
      {
        name: "Multispectral Sensors",
        description: "Specialized cameras for vegetation analysis",
      },
      {
        name: "IoT Platform",
        description: "Cloud connectivity for data transmission and storage",
      },
      {
        name: "GIS Software",
        description: "Geographic information systems for mapping",
      },
    ],
    gallery: ["/images/projects/agricultural-drone.jpg"],
    outcomes: [
      "Partnered with 5 local farms for pilot program",
      "Achieved 25% reduction in water usage",
      "Early disease detection saved 15% of crop yield",
      "Featured in regional agricultural conference",
    ],
  },
  "robotic-arm-controller": {
    id: "robotic-arm-controller",
    title: "Robotic Arm Controller",
    description:
      "6-DOF robotic arm with inverse kinematics and real-time trajectory planning for industrial applications.",
    fullDescription:
      "This 6-degree-of-freedom robotic arm represents our advancement in industrial automation. The system features custom-designed 3D printed components, precision servo motors, and sophisticated control algorithms. The arm can perform pick-and-place operations, assembly tasks, and even artistic drawing with remarkable precision. The accompanying software interface allows for intuitive programming of complex movements.",
    tags: ["Arduino", "C++", "3D Printing"],
    category: "mechatronics",
    image: "/images/projects/robotic-arm.jpg",
    status: "Completed",
    teamSize: 4,
    duration: "6 months",
    year: "2024",
    features: [
      "6 degrees of freedom for versatile manipulation",
      "Sub-millimeter positioning accuracy",
      "Intuitive teach-and-repeat programming",
      "Force feedback for delicate operations",
      "Modular end-effector system",
      "Real-time trajectory visualization",
    ],
    challenges: [
      "Implementing smooth inverse kinematics calculations",
      "Achieving precise calibration across all joints",
      "Designing lightweight yet rigid 3D printed parts",
      "Creating an intuitive user interface for programming",
    ],
    technologies: [
      {
        name: "Arduino Mega",
        description: "Microcontroller for real-time motor control",
      },
      {
        name: "C++",
        description: "Programming language for embedded systems",
      },
      {
        name: "3D Printing",
        description: "FDM and SLA printing for custom components",
      },
      {
        name: "Servo Motors",
        description: "High-torque digital servos for precise movement",
      },
    ],
    gallery: ["/images/projects/robotic-arm.jpg"],
    outcomes: [
      "Demonstrated at 3 engineering exhibitions",
      "Used as teaching tool for 50+ students",
      "Open-source design downloaded 200+ times",
      "Inspired 2 spin-off student projects",
    ],
  },
  "object-recognition-system": {
    id: "object-recognition-system",
    title: "Object Recognition System",
    description:
      "Real-time object detection and classification system for autonomous navigation and manipulation tasks.",
    fullDescription:
      "The Object Recognition System serves as the visual intelligence core for our robotics projects. Using state-of-the-art deep learning models, the system can detect, classify, and track multiple objects in real-time. This technology powers the perception capabilities of our autonomous robots, enabling them to understand and interact with their environment intelligently.",
    tags: ["Computer Vision", "YOLO", "OpenCV"],
    category: "ai",
    image: "/images/projects/object-recognition.jpg",
    status: "In Progress",
    teamSize: 5,
    duration: "9 months",
    year: "2024",
    features: [
      "Real-time detection at 30+ FPS",
      "Recognition of 80+ object categories",
      "3D pose estimation for manipulation tasks",
      "Multi-camera support for wide coverage",
      "Custom training pipeline for new objects",
      "Edge deployment for embedded systems",
    ],
    challenges: [
      "Achieving real-time performance on embedded hardware",
      "Handling varying lighting conditions",
      "Training models with limited local datasets",
      "Integrating with existing robot control systems",
    ],
    technologies: [
      {
        name: "YOLOv8",
        description: "State-of-the-art object detection model",
      },
      {
        name: "OpenCV",
        description: "Computer vision library for image processing",
      },
      {
        name: "NVIDIA Jetson",
        description: "Edge AI computing platform for deployment",
      },
      {
        name: "PyTorch",
        description: "Deep learning framework for model training",
      },
    ],
    gallery: ["/images/projects/object-recognition.jpg"],
    outcomes: [
      "Integrated into 3 robot platforms",
      "Achieved 92% detection accuracy",
      "Reduced perception latency by 50%",
      "Published research paper on optimization techniques",
    ],
  },
  "line-following-robot": {
    id: "line-following-robot",
    title: "Line Following Robot",
    description:
      "Competition-ready line following robot with PID control and adaptive speed for various track conditions.",
    fullDescription:
      "Our Line Following Robot is designed for robotics competitions and serves as an excellent educational platform for control systems. The robot uses an array of infrared sensors to detect line position and implements PID control for smooth, precise following. Adaptive speed control allows it to slow down for curves and accelerate on straightaways, achieving impressive lap times while maintaining reliability.",
    tags: ["Embedded", "PID Control", "Sensors"],
    category: "mechatronics",
    image: "/images/projects/line-follower.jpg",
    status: "Completed",
    teamSize: 3,
    duration: "4 months",
    year: "2023",
    features: [
      "8-sensor IR array for precise line detection",
      "PID control with auto-tuning capability",
      "Adaptive speed based on track curvature",
      "Bluetooth configuration and telemetry",
      "Competition-grade chassis design",
      "Rechargeable LiPo battery system",
    ],
    challenges: [
      "Tuning PID parameters for different track conditions",
      "Handling line intersections and gaps",
      "Optimizing for both speed and reliability",
      "Designing a lightweight yet stable chassis",
    ],
    technologies: [
      {
        name: "STM32",
        description: "ARM microcontroller for high-speed processing",
      },
      {
        name: "PID Control",
        description: "Proportional-Integral-Derivative control algorithm",
      },
      {
        name: "IR Sensors",
        description: "Infrared reflectance sensors for line detection",
      },
      {
        name: "Motor Drivers",
        description: "H-bridge circuits for precise motor control",
      },
    ],
    gallery: ["/images/projects/line-follower.jpg"],
    outcomes: [
      "1st place in regional robotics competition",
      "Completed 50+ successful test runs",
      "Used to train 20+ new club members",
      "Design adopted by local high school robotics team",
    ],
  },
}

export function getProjectById(id: string): ProjectDetail | undefined {
  return projectsData[id]
}

export function getAllProjectIds(): string[] {
  return Object.keys(projectsData)
}
