# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.inline_response2002_data import InlineResponse2002Data  # noqa: F401,E501
from swagger_server import util


class InlineResponse2002(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, status: Object=None, data: InlineResponse2002Data=None):  # noqa: E501
        """InlineResponse2002 - a model defined in Swagger

        :param status: The status of this InlineResponse2002.  # noqa: E501
        :type status: Object
        :param data: The data of this InlineResponse2002.  # noqa: E501
        :type data: InlineResponse2002Data
        """
        self.swagger_types = {
            'status': Object,
            'data': InlineResponse2002Data
        }

        self.attribute_map = {
            'status': 'status',
            'data': 'data'
        }
        self._status = status
        self._data = data

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2002':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_2 of this InlineResponse2002.  # noqa: E501
        :rtype: InlineResponse2002
        """
        return util.deserialize_model(dikt, cls)

    @property
    def status(self) -> Object:
        """Gets the status of this InlineResponse2002.


        :return: The status of this InlineResponse2002.
        :rtype: Object
        """
        return self._status

    @status.setter
    def status(self, status: Object):
        """Sets the status of this InlineResponse2002.


        :param status: The status of this InlineResponse2002.
        :type status: Object
        """

        self._status = status

    @property
    def data(self) -> InlineResponse2002Data:
        """Gets the data of this InlineResponse2002.


        :return: The data of this InlineResponse2002.
        :rtype: InlineResponse2002Data
        """
        return self._data

    @data.setter
    def data(self, data: InlineResponse2002Data):
        """Sets the data of this InlineResponse2002.


        :param data: The data of this InlineResponse2002.
        :type data: InlineResponse2002Data
        """

        self._data = data
