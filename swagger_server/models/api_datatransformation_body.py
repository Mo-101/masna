# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class ApiDatatransformationBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, dataset: Object=None, transformation_type: Object=None):  # noqa: E501
        """ApiDatatransformationBody - a model defined in Swagger

        :param dataset: The dataset of this ApiDatatransformationBody.  # noqa: E501
        :type dataset: Object
        :param transformation_type: The transformation_type of this ApiDatatransformationBody.  # noqa: E501
        :type transformation_type: Object
        """
        self.swagger_types = {
            'dataset': Object,
            'transformation_type': Object
        }

        self.attribute_map = {
            'dataset': 'dataset',
            'transformation_type': 'transformation_type'
        }
        self._dataset = dataset
        self._transformation_type = transformation_type

    @classmethod
    def from_dict(cls, dikt) -> 'ApiDatatransformationBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The api_datatransformation_body of this ApiDatatransformationBody.  # noqa: E501
        :rtype: ApiDatatransformationBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def dataset(self) -> Object:
        """Gets the dataset of this ApiDatatransformationBody.

        Dataset to transform  # noqa: E501

        :return: The dataset of this ApiDatatransformationBody.
        :rtype: Object
        """
        return self._dataset

    @dataset.setter
    def dataset(self, dataset: Object):
        """Sets the dataset of this ApiDatatransformationBody.

        Dataset to transform  # noqa: E501

        :param dataset: The dataset of this ApiDatatransformationBody.
        :type dataset: Object
        """

        self._dataset = dataset

    @property
    def transformation_type(self) -> Object:
        """Gets the transformation_type of this ApiDatatransformationBody.

        Type of transformation  # noqa: E501

        :return: The transformation_type of this ApiDatatransformationBody.
        :rtype: Object
        """
        return self._transformation_type

    @transformation_type.setter
    def transformation_type(self, transformation_type: Object):
        """Sets the transformation_type of this ApiDatatransformationBody.

        Type of transformation  # noqa: E501

        :param transformation_type: The transformation_type of this ApiDatatransformationBody.
        :type transformation_type: Object
        """

        self._transformation_type = transformation_type
