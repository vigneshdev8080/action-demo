pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/vigneshdev8080/action-demo.git', branch: 'main')
      }
    }

    stage('Npm install') {
      steps {
        sh 'npm install'
      }
    }

  }
}