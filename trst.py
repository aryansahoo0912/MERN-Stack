import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
import numpy as np
# Import the MNIST dataset
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
# Normalize the data
x_train = x_train / 255.0
x_test = x_test / 255.0
# Create the model
model = Sequential()
model.add(Dense(784, activation='relu'))
model.add(Dense(10, activation='softmax'))
# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
# Train the model
model.fit(x_train, y_train, epochs=10)
# Evaluate the model
score = model.evaluate(x_test, y_test)
print('Test accuracy:', score[1])