from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import pickle

model = SentenceTransformer('paraphrase-MPNet-base-v2')

class KuralHeals:
    def __init__(self):
        self.embeddings = self.load_embeddings()
        self.model = model
    
    def load_embeddings(self):
        try:
            with open('./embeddings/kural_embeddings.pkl', 'rb') as f:
                embeddings = pickle.load(f)
            return embeddings
        except FileNotFoundError:
            print("Embeddings file not found!")
            return None
        
    def find_top_3_similar_kurals(self, user_qn):
        user_embedding = self.model.encode([user_qn], convert_to_tensor=False)
        similarities = []
        kural_numbers = []

        for kural_no, content in self.embeddings.items():
            kural_question_embeddings = content['questions']
            kural_similarities = cosine_similarity(user_embedding, kural_question_embeddings).flatten()
            max_similarity = np.max(kural_similarities)
            similarities.append(max_similarity)
            kural_numbers.append(kural_no)
        
        similarities = np.array(similarities)
        top_3_indices = similarities.argsort()[-3:][::-1]
        top_3_kurals = [(kural_numbers[i], similarities[i]) for i in top_3_indices]
        
        return top_3_kurals
    
    def ask(self,qn):
        top_3_kurals = self.find_top_3_similar_kurals(qn)
        kurals = []
        if top_3_kurals:
            for kural_no, similarity in top_3_kurals:
                kurals.append({"match": f"{self.embeddings[kural_no]['kural']}", "kural_no": f"{kural_no}"})
            return kurals
        return None

