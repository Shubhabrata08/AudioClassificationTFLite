
import sounddevice as sd
import soundfile as sf
import numpy as np
import librosa.display
import matplotlib.pyplot as plt

def record_audio(sample_rate, duration):
    audio_data = sd.rec(int(sample_rate * duration), samplerate=sample_rate, channels=1, dtype='int16')
    sd.wait()
    return audio_data.flatten()

def extract_mfcc(audio_data, sample_rate, n_mfcc=13, hop_length=512):
    mfccs = librosa.feature.mfcc(y=audio_data, sr=sample_rate, n_mfcc=n_mfcc, hop_length=hop_length)
    return mfccs

# Record a short audio clip (adjust sample_rate and duration as needed)
sample_rate = 44100
duration = 5
audio_data = record_audio(sample_rate, duration)

# Extract MFCC features
mfccs = extract_mfcc(audio_data, sample_rate)

# Display MFCC features
plt.figure(figsize=(10, 4))
librosa.display.specshow(mfccs, x_axis='time')
plt.colorbar()
plt.title('MFCC')
plt.show()
