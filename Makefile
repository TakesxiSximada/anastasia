PACKAGE_NAME := anastasia

include boilermake/common.mk
include boilermake/py.mk
include boilermake/sphinx.mk


.PHONY: docs
docs:
	make sphinx-build outout=$(output)
