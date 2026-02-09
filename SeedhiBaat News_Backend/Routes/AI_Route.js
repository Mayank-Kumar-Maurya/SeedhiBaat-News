const express = require("express");
const { textAi, textAiGem } = require("../utils/AI");
const { getNews } = require("../utils/openNews");
const router = express.Router()

router.route("/")
.get((req, res)=>
{
    res.send("jk")
})

data = [
    [
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
      {
        title: "Farmers' Protest Intensifies Over MSP Demands",
        content: "Thousands of farmers from across India have converged at the Delhi border, intensifying their protest demanding a legally guaranteed Minimum Support Price (MSP) for all their produce. The farmers cite fluctuating market prices and the increasing cost of cultivation as reasons for their distress. While the government has engaged in multiple rounds of talks, a resolution remains elusive, with farmers vowing to continue their agitation until their demands are met. Some farmer unions have also called for a nationwide 'chakka jam' (road blockade) to further pressure the government.",
        positive_review: 35,
        negative_review: 65
      },
      {
        title: 'Unemployment Concerns Mount Amidst Economic Slowdown',
        content: 'Reports indicate a continued rise in unemployment rates across various sectors in India. Critics point to the pace of economic recovery and the perceived lack of robust job creation initiatives by the government. Government spokespersons, however, highlight schemes aimed at skill development and promoting entrepreneurship, stating that these will lead to long-term employment generation. Public discourse on social media reflects anxieties about future job prospects, especially among the youth.',
        positive_review: 20,
        negative_review: 80
      },
    ]
]

router.route("/sensitive")
.post(async(req, res)=>
{
    let newslist = await getNews();
    let aires = await textAiGem(newslist);
    console.log("hi")
    console.log(aires);
    res.status(200).json({aires:aires})
    
    res.status(200).json({aires:data})
})

module.exports = router;