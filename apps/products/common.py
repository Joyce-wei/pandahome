# -*- coding: utf-8 -*-
import requests
import json
import random
from django.conf import settings


class GetProductDetail:
    """
    获取产品信息
    """

    def __init__(self):
        """
        初始化相关数据,包括接口的url,headers和parm
        :return: None
        """
        self.url = settings.BASEURL+"/goods/"
        self.headers = {

        }
        self.parm = {
            "is_active":True
        }

    def get_product_detail(self,productid):
        """
        获取产品明细.
        :return:data
        """
        pd_data = requests.get(self.url+productid+"/", headers=self.headers, params=self.parm)
        data = pd_data.json()
        return data


class GetPromotionDetail:
    """
    获取促销信息
    """

    def __init__(self):
        """
        初始化相关数据,包括接口的url,headers和parm
        :return: None
        """
        self.url = settings.BASEURL+"/PromotionInfos/"
        self.headers = {

        }
        self.parm = {
            "is_active":True
        }

    def get_promotion_detail(self):
        """
        获取产品明细.
        :return:data
        """
        pm_data = requests.get(self.url+settings.PROMOTIONINFOID+"/", headers=self.headers, params=self.parm)
        data = pm_data.json()
        return data