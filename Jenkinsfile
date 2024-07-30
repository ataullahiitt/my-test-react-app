pipeline {
    agent any
        tools {
        nodejs "NodeJs" 
    }
    stages {

         stage('Fetch Code') {
            steps {
                git branch:'main', url:'https://github.com/ataullahiitt/my-test-react-app.git'
            }
        }

        stage('Build') {
            steps {
                
                sh 'npm install && npm run build' 
            }
        }
    }
}