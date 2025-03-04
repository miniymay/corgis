import pickle
import time
from os import makedirs
import csv

from tools.build_report import BuildReport
from tools.case_modifiers import snake_case
from tools.common import load_templates, build_image_files, build_website_file, get_values_grouped_by_index
from tools.dataset import CorgisType, Dataset
from tools.tifa import TifaDefinition

__version__ = '2.0.0'

env = load_templates('csv')

LANGUAGE_TYPE_NAMES = {
    CorgisType.string: 'String',
    CorgisType.int: 'Integer',
    CorgisType.float: 'Float',
    CorgisType.boolean: 'Boolean',
    CorgisType.dict: 'Dictionary'
}

LANGUAGE_TYPE_DESCRIPTIONS = {
    CorgisType.string: 'String (text)',
    CorgisType.int: 'Integer (whole number)',
    CorgisType.float: 'Float (decimal number)',
    CorgisType.boolean: 'Boolean (True or False)',
    CorgisType.dict: 'Dictionary'
}

LANGUAGE_INFO = {
    'LANGUAGE_TYPE_NAMES': LANGUAGE_TYPE_NAMES,
    'LANGUAGE_TYPE_DESCRIPTIONS': LANGUAGE_TYPE_DESCRIPTIONS
}


def build_csv_file(dataset: Dataset, destination):
    destination += snake_case(dataset.name) + ".csv"
    with open(destination, 'w') as output_file:
        fieldnames = [prop.name for prop in dataset.properties]
        dict_writer = csv.DictWriter(output_file, fieldnames=fieldnames, dialect='unix')
        dict_writer.writeheader()
        dict_writer.writerows(dataset.values)
    return destination

def build(dataset, configuration):
    # Prelude
    start = time.time()

    # Processing
    dataset_name = snake_case(dataset.name)
    destination = configuration.destination.format(dataset=dataset_name,
                                                   format='csv')
    makedirs(destination, exist_ok=True)
    files = [build_csv_file(dataset, destination),
             build_image_files(dataset, configuration),
             build_website_file(dataset, destination, env, LANGUAGE_INFO)]

    # Wrap up
    duration = time.time() - start
    return BuildReport(dataset, 'csv', duration, files, 'success')
