pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Build (optional)') {
      steps {
        echo 'No build step needed for this simple Node API.'
      }
    }
  }

  post {
    success {
      echo 'Bravo, déploiement réussi !'
    }
    failure {
      echo 'Build échoué. Vérifiez les logs Jenkins.'
    }
  }
}