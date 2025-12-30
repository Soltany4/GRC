from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import numpy as np

# -*- coding: utf-8 -*-


# Collecte des données
security_control_data =pd.read_json('D:\grc\iso2.json') # descriptions des contrôles de sécurité
asset_data = pd.read_json('D:\grc\iso.json') # descriptions des actifs
asset_data.dropna(subset=['category_control'], inplace=True)
security_control_data = security_control_data.dropna(subset=['data'])




text_list = []
for block in security_control_data['data']:
    for item in block:
        text = item[0]['text']
        text_list.append(text)


category_list = []
for blockC in asset_data['category_control']:
    for itemC in blockC[0]['controls']:
        category = itemC['control']
        category_list.append(category)

# Vectorisation des données
vectorizer = TfidfVectorizer(stop_words='english')
security_control_vectors = vectorizer.fit_transform(text_list)

# Apprentissage du modèle
kmeans = KMeans(n_clusters=135, random_state=0, n_init=10).fit(security_control_vectors)

security_control = []

# Attribution des catégories aux contrôles de sécurité
#security_control_data['cluster'] = kmeans.labels_
'''
# Évaluation du modèle
inertia = kmeans.inertia_
print(f"inertie du modèle est : {inertia}")
'''
# Vectorisation des descriptions d'actifs
asset_vectors = vectorizer.transform(category_list)

# Prédiction des catégories d'actifs
predicted_categories = kmeans.predict(asset_vectors)

# Get cluster labels and cluster centers
labels = kmeans.labels_
centers = kmeans.cluster_centers_

#print("Cluster labels:", labels)
#print("Cluster centers:", centers)

#print(predicted_categories)


data_with_clusters = list(zip(text_list, predicted_categories))

for text, cluster in data_with_clusters:
    print(f"{text}, Cluster: {cluster}")
'''
dataScatter = {}

for tl in text_list:
    for cl in category_list:
        dataScatter[tl] = cl

x_values = list(dataScatter.keys())
y_values = list(dataScatter.values())

x_data = [point[0] for point in dataScatter.values()]
y_data = [point[1] for point in dataScatter.values()]
'''
'''
plt.scatter(x_data, y_data)
plt.scatter(centers[:, 0], centers[:, 1], marker='x', s=200, linewidths=3, color='r')
plt.title(f'K-Means Clustering with {135} Clusters')
plt.xlabel('Clusters')
plt.ylabel('Asset Index')
plt.show()
'''
#print(dataScatter)
'''

# Ajout des prédictions au dataframe
#asset_data['cluster'] = predicted_categories

cluster_to_category = {}
cluster_to_soucategory={}
cluster_to_idnist={}
cluster_to_idiso={}
cluster_to_clause={}

for index, row in security_control_data.iterrows():
    cluster_to_category[row['cluster']] = row['Catégorie de contrôle de sécurité']
    cluster_to_soucategory[row['cluster']] = row['Sous-catégorie de contrôle de sécurité']
    cluster_to_idnist[row['cluster']] = row['ID-NIST']
    cluster_to_idiso[row['cluster']] = row['ID-ISO']
    cluster_to_clause[row['cluster']] = row['clause']




# Map cluster numbers to category names in asset_data
    asset_data['Catégorie de contrôle de sécurité'] = asset_data['cluster'].map(cluster_to_category)
    asset_data['Sous-catégorie de contrôle de sécurité'] = asset_data['cluster'].map(cluster_to_soucategory)
    asset_data['ID-NIST'] = asset_data['cluster'].map(cluster_to_idnist)
    asset_data['ID-ISO'] = asset_data['cluster'].map(cluster_to_idiso)
    asset_data['clause'] = asset_data['cluster'].map(cluster_to_clause)


# Display the asset data with category names
print(asset_data[['category_control', 'Catégorie de contrôle de sécurité']])
print(len(security_control_data))


# Perform K-Means clustering
kmeans = KMeans(n_clusters=k)
kmeans.fit(data)



# Get cluster labels and cluster centers
labels = kmeans.labels_
centers = kmeans.cluster_centers_

print("Cluster labels:", labels)
print("Cluster centers:", centers)

plt.scatter(data[:, 0], data[:, 1], c=labels)
plt.scatter(centers[:, 0], centers[:, 1], marker='x', s=200, linewidths=3, color='r')
plt.title(f'K-Means Clustering with {k} Clusters')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.show()
'''