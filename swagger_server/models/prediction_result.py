# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class PredictionResult(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, prediction_success: Object=None, predicted_locations: Object=None):  # noqa: E501
        """PredictionResult - a model defined in Swagger

        :param prediction_success: The prediction_success of this PredictionResult.  # noqa: E501
        :type prediction_success: Object
        :param predicted_locations: The predicted_locations of this PredictionResult.  # noqa: E501
        :type predicted_locations: Object
        """
        self.swagger_types = {
            'prediction_success': Object,
            'predicted_locations': Object
        }

        self.attribute_map = {
            'prediction_success': 'prediction_success',
            'predicted_locations': 'predicted_locations'
        }
        self._prediction_success = prediction_success
        self._predicted_locations = predicted_locations

    @classmethod
    def from_dict(cls, dikt) -> 'PredictionResult':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The PredictionResult of this PredictionResult.  # noqa: E501
        :rtype: PredictionResult
        """
        return util.deserialize_model(dikt, cls)

    @property
    def prediction_success(self) -> Object:
        """Gets the prediction_success of this PredictionResult.

        Indicates whether the prediction was successful.  # noqa: E501

        :return: The prediction_success of this PredictionResult.
        :rtype: Object
        """
        return self._prediction_success

    @prediction_success.setter
    def prediction_success(self, prediction_success: Object):
        """Sets the prediction_success of this PredictionResult.

        Indicates whether the prediction was successful.  # noqa: E501

        :param prediction_success: The prediction_success of this PredictionResult.
        :type prediction_success: Object
        """

        self._prediction_success = prediction_success

    @property
    def predicted_locations(self) -> Object:
        """Gets the predicted_locations of this PredictionResult.

        List of predicted coordinates with suitability scores.  # noqa: E501

        :return: The predicted_locations of this PredictionResult.
        :rtype: Object
        """
        return self._predicted_locations

    @predicted_locations.setter
    def predicted_locations(self, predicted_locations: Object):
        """Sets the predicted_locations of this PredictionResult.

        List of predicted coordinates with suitability scores.  # noqa: E501

        :param predicted_locations: The predicted_locations of this PredictionResult.
        :type predicted_locations: Object
        """

        self._predicted_locations = predicted_locations