from setuptools import setup, find_packages

setup(
    name='apiverve_spamdetector',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Spam Detector is a spam detection API that evaluates text submissions to determine whether content is likely spam. Pass a message body and an optional sender email to check for spam patterns, with paid plans adding IP blocklist and disposable email checks.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/spamdetector?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
