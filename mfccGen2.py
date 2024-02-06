import sounddevice as sd
import numpy as np
import librosa
import time

def record_audio(sample_rate, duration):
    audio_data = sd.rec(int(sample_rate * duration), samplerate=sample_rate, channels=1, dtype='int16')
    sd.wait()
    return audio_data.flatten()

def extract_mfcc(audio_data, sample_rate, n_mfcc=13, hop_length=512):
    mfccs = librosa.feature.mfcc(y=float(np.asarray(audio_data))[0,len(audio_data)-1], sr=sample_rate, n_mfcc=n_mfcc, hop_length=hop_length)
    return mfccs

def main():
    sample_rate = 44100  # Adjust according to your requirements
    duration = 5  # Adjust the duration of each recording
    interval = 2  # Adjust the interval for MFCC generation

    try:
        while True:
            print("Recording...")
            audio_data = record_audio(sample_rate, duration)
            print("Audio recorded.")

            print("Generating MFCC...")
            mfccs = extract_mfcc(audio_data, sample_rate)
            print("MFCC generated.")

            # Do something with the MFCC data, e.g., save to a file, analyze, etc.

            time.sleep(interval)

    except KeyboardInterrupt:
        print("\nRecording stopped.")

if __name__ == "__main__":
    main()
