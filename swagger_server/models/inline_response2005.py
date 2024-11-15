# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class InlineResponse2005(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, status: Object=None, details: Object=None):  # noqa: E501
        """InlineResponse2005 - a model defined in Swagger

        :param status: The status of this InlineResponse2005.  # noqa: E501
        :type status: Object
        :param details: The details of this InlineResponse2005.  # noqa: E501
        :type details: Object
        """
        self.swagger_types = {
            'status': Object,
            'details': Object
        }

        self.attribute_map = {
            'status': 'status',
            'details': 'details'
        }
        self._status = status
        self._details = details

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2005':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_5 of this InlineResponse2005.  # noqa: E501
        :rtype: InlineResponse2005
        """
        return util.deserialize_model(dikt, cls)

    @property
    def status(self) -> Object:
        """Gets the status of this InlineResponse2005.

        Success or failure status of the adaptive learning configuration.  # noqa: E501

        :return: The status of this InlineResponse2005.
        :rtype: Object
        """
        return self._status

    @status.setter
    def status(self, status: Object):
        """Sets the status of this InlineResponse2005.

        Success or failure status of the adaptive learning configuration.  # noqa: E501

        :param status: The status of this InlineResponse2005.
        :type status: Object
        """

        self._status = status

    @property
    def details(self) -> Object:
        """Gets the details of this InlineResponse2005.

        Details on adaptive learning configuration applied.  # noqa: E501

        :return: The details of this InlineResponse2005.
        :rtype: Object
        """
        return self._details

    @details.setter
    def details(self, details: Object):
        """Sets the details of this InlineResponse2005.

        Details on adaptive learning configuration applied.  # noqa: E501

        :param details: The details of this InlineResponse2005.
        :type details: Object
        """

        self._details = details
