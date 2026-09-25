import pandas as pd
import csv

input_file = "recipes_w_search_terms.csv"
output_file = "database/recipes_sample.csv"

print("Extracting 1000 rows")

# Load first 1000 recipe sample into csv file
df = pd.read_csv(input_file, nrows=1000)
df.to_csv(output_file, index=False, quoting=csv.QUOTE_ALL, escapechar="\\")

print(f"{output_file} created")