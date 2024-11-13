# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class InlineResponse2009(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, status: Object=None, map_url: Object=None):  # noqa: E501
        """InlineResponse2009 - a model defined in Swagger

        :param status: The status of this InlineResponse2009.  # noqa: E501
        :type status: Object
        :param map_url: The map_url of this InlineResponse2009.  # noqa: E501
        :type map_url: Object
        """
        self.swagger_types = {
            'status': Object,
            'map_url': Object
        }

        self.attribute_map = {
            'status': 'status',
            'map_url': 'map_url'
        }
        self._status = status
        self._map_url = map_url

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2009':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_9 of this InlineResponse2009.  # noqa: E501
        :rtype: InlineResponse2009
        """
        return util.deserialize_model(dikt, cls)

    @property
    def status(self) -> Object:
        """Gets the status of this InlineResponse2009.


        :return: The status of this InlineResponse2009.
        :rtype: Object
        """
        return self._status

    @status.setter
    def status(self, status: Object):
        """Sets the status of this InlineResponse2009.


        :param status: The status of this InlineResponse2009.
        :type status: Object
        """

        self._status = status

    @property
    def map_url(self) -> Object:
        """Gets the map_url of this InlineResponse2009.

        URL to the interactive map generated with Mapbox.  # noqa: E501

        :return: The map_url of this InlineResponse2009.
        :rtype: Object
        """
        return self._map_url

    @map_url.setter
    def map_url(self, map_url: Object):
        """Sets the map_url of this InlineResponse2009.

        URL to the interactive map generated with Mapbox.  # noqa: E501

        :param map_url: The map_url of this InlineResponse2009.
        :type map_url: Object
        """

        self._map_url = map_url
