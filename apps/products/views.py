# -*- coding: utf-8 -*-
from django.shortcuts import render
from .common import GetProductDetail,GetPromotionDetail
# Create your views here.


def listing(request):
    return render(request, "listing.html")


def product(request,productid):
    #get product detail class
    pd = GetProductDetail()
    pd_data = pd.get_product_detail(productid)
    del pd
    # get promotion detail class
    pm = GetPromotionDetail()
    pm_data = pm.get_promotion_detail()
    del pm
    return render(request, "product.html",{'productid':productid,'pd_data':pd_data,'pm_data':pm_data})