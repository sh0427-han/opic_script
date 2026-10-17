window.OPIC_DATA = {
  "title": "OPIc 5-5 IM2 최소암기 스크립트",
  "version": "v51",
  "updated": "2026-10-17",
  "questionCount": 161,
  "survey": {
    "title": "시험 전 설문 선택",
    "note": "클럽·조깅·걷기는 연습 및 선택 목록에서 제외했습니다. 운동 항목은 실제 시험에서 본인에게 맞게 선택하고, 시험 화면의 선택 개수 조건을 확인하세요.",
    "settings": [
      {
        "label": "목표 등급",
        "value": "IM2"
      },
      {
        "label": "시험 난이도",
        "value": "5-5"
      },
      {
        "label": "주거 설정",
        "value": "개인 주택이나 아파트에 홀로 거주",
        "topics": [
          "집 / 가구"
        ]
      }
    ],
    "groups": [
      {
        "title": "여가 활동",
        "items": [
          {
            "label": "카페 / 커피숍 가기",
            "topics": [
              "카페 / 커피숍"
            ]
          },
          {
            "label": "술집 / 펍 가기",
            "topics": [
              "술집 / 펍"
            ]
          },
          {
            "label": "공원 가기",
            "topics": [
              "공원"
            ]
          },
          {
            "label": "해변 가기",
            "topics": [
              "해변"
            ]
          }
        ]
      },
      {
        "title": "취미 / 관심사",
        "items": [
          {
            "label": "음악 감상",
            "topics": [
              "음악"
            ]
          }
        ]
      },
      {
        "title": "운동",
        "items": [
          {
            "label": "운동을 전혀 하지 않음",
            "topics": []
          }
        ]
      },
      {
        "title": "휴가 / 여행",
        "items": [
          {
            "label": "국내여행",
            "topics": [
              "국내여행",
              "해변"
            ]
          },
          {
            "label": "집에서 보내는 휴가",
            "topics": [
              "집에서 보내는 휴가"
            ]
          }
        ]
      }
    ]
  },
  "topics": [
    {
      "id": "topic-intro",
      "order": 0,
      "title": "자기소개",
      "source": "survey",
      "questions": [
        {
          "id": "topic-intro-q1",
          "number": "Q1",
          "scriptOrigin": "user",
          "question": "자기소개를 해 주세요.",
          "status": "필수",
          "answer": [
            "My name is Sanghun.",
            "I'm really nervous right now because the OPIc test is difficult for me.",
            "But I'm trying my best."
          ],
          "hint": "이름을 말하기. → OPIc 시험이 어려워서 지금 긴장된다고 이야기하기. → 그래도 최선을 다하고 있다고 마무리하기.",
          "questionEn": "Tell me about yourself.",
          "type": "자기소개",
          "hintSteps": [
            "이름을 말하기.",
            "OPIc 시험이 어려워서 지금 긴장된다고 이야기하기.",
            "그래도 최선을 다하고 있다고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-intro-introduction",
          "title": "자기소개",
          "questionIds": [
            "topic-intro-q1"
          ]
        }
      ]
    },
    {
      "id": "topic-1",
      "order": 1,
      "title": "집 / 가구",
      "source": "survey",
      "questions": [
        {
          "id": "topic-1-q1",
          "number": "Q1",
          "scriptOrigin": "user",
          "question": "현재 살고 있는 집을 설명해 주세요. 어떤 방들이 있고, 내부는 어떻게 생겼나요?",
          "status": "필수",
          "answer": [
            "Well, I live in an apartment in Yongin, Korea.",
            "It has two bedrooms, a kitchen, a living room, and a bathroom.",
            "My favorite room is the living room. It's next to the kitchen, and it has a really comfortable sofa.",
            "I can relax there.",
            "There's also a table and a TV in the living room.",
            "So, that's my home."
          ],
          "hint": "용인에 있는 아파트에 살고 있다고 말하기. → 침실 2개, 주방, 거실, 욕실이 있다고 설명하기. → 가장 좋아하는 방은 주방 옆 거실이고, 편안한 소파가 있다고 말하기. → 그곳에서 쉴 수 있다고 말하기. → 거실에 테이블과 TV도 있다고 덧붙이기. → 이것이 내가 사는 집이라고 마무리하기.",
          "questionEn": "Tell me about the home you live in. What rooms does it have, and what does the inside look like?",
          "type": "묘사",
          "hintSteps": [
            "용인에 있는 아파트에 살고 있다고 말하기.",
            "침실 2개, 주방, 거실, 욕실이 있다고 설명하기.",
            "가장 좋아하는 방은 주방 옆 거실이고, 편안한 소파가 있다고 말하기.",
            "그곳에서 쉴 수 있다고 말하기.",
            "거실에 테이블과 TV도 있다고 덧붙이기.",
            "이것이 내가 사는 집이라고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q2",
          "number": "Q2",
          "scriptOrigin": "user",
          "question": "퇴근 후 집에서 보통 무엇을 하나요? 저녁 식사부터 잠자리에 들 때까지의 일과를 순서대로 말해 주세요.",
          "status": "필수",
          "answer": [
            "I usually spend quiet evenings at home, especially after a busy day at work.",
            "First, I make something simple for dinner, or I order food if I'm too tired to cook.",
            "After dinner, I sit on my sofa and watch TV for a while.",
            "I don't do anything special.",
            "Before bed, I put my things away and listen to music for a few minutes.",
            "I usually go to sleep around ten."
          ],
          "hint": "바쁘게 일한 날에는 특히 집에서 조용히 저녁을 보낸다고 말하기. → 먼저 간단한 저녁을 만들고, 너무 피곤하면 음식을 주문한다고 설명하기. → 저녁을 먹은 뒤 소파에 앉아 잠시 TV를 본다고 말하기. → 특별한 일은 하지 않는다고 덧붙이기. → 자기 전에 물건을 정리하고 몇 분 동안 음악을 듣는다고 설명하기. → 보통 10시쯤 잠든다고 마무리하기.",
          "questionEn": "What do you usually do at home after work? Walk me through a typical evening, from dinner to bedtime.",
          "type": "일과·절차",
          "hintSteps": [
            "바쁘게 일한 날에는 특히 집에서 조용히 저녁을 보낸다고 말하기.",
            "먼저 간단한 저녁을 만들고, 너무 피곤하면 음식을 주문한다고 설명하기.",
            "저녁을 먹은 뒤 소파에 앉아 잠시 TV를 본다고 말하기.",
            "특별한 일은 하지 않는다고 덧붙이기.",
            "자기 전에 물건을 정리하고 몇 분 동안 음악을 듣는다고 설명하기.",
            "보통 10시쯤 잠든다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q3",
          "number": "Q3",
          "scriptOrigin": "user",
          "question": "주거 환경에 생긴 변화를 말해 주세요. 이전 집은 어땠고, 지금은 무엇이 달라졌나요?",
          "status": "필수",
          "answer": [
            "The biggest change is that I live alone in a smaller apartment now.",
            "When I was in university, I lived with my family in a bigger apartment in Seoul, Korea, so we had more rooms and more furniture.",
            "After I graduated from university, I moved to Yongin, Korea, and started living alone.",
            "So now, I only have the things I really need, like a bed, a sofa, and a table."
          ],
          "hint": "가장 큰 변화는 지금 더 작은 아파트에서 혼자 산다는 점이라고 말하기. → 대학생 때는 서울의 더 큰 아파트에서 가족과 살았고, 방과 가구도 더 많았다고 비교하기. → 대학 졸업 후 용인으로 이사해 혼자 살기 시작했다고 설명하기. → 그래서 지금은 침대, 소파, 테이블처럼 꼭 필요한 물건만 있다고 마무리하기.",
          "questionEn": "Tell me about a change in your living situation. What was your home like before, and what is different now?",
          "type": "변화·비교",
          "hintSteps": [
            "가장 큰 변화는 지금 더 작은 아파트에서 혼자 산다는 점이라고 말하기.",
            "대학생 때는 서울의 더 큰 아파트에서 가족과 살았고, 방과 가구도 더 많았다고 비교하기.",
            "대학 졸업 후 용인으로 이사해 혼자 살기 시작했다고 설명하기.",
            "그래서 지금은 침대, 소파, 테이블처럼 꼭 필요한 물건만 있다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q4",
          "number": "Q4",
          "scriptOrigin": "user",
          "question": "어릴 때 살던 집과 지금 집을 비교해 주세요. 크기와 분위기는 어떻게 다른가요?",
          "status": "필수",
          "answer": [
            "The biggest change is that I live alone in a smaller apartment now.",
            "When I was in university, I lived with my family in a bigger apartment in Seoul, Korea, so we had more rooms and more furniture.",
            "After I graduated from university, I moved to Yongin, Korea, and started living alone.",
            "So now, I only have the things I really need, like a bed, a sofa, and a table."
          ],
          "hint": "가장 큰 변화는 지금 더 작은 아파트에서 혼자 산다는 점이라고 말하기. → 대학생 때는 서울의 더 큰 아파트에서 가족과 살았고, 방과 가구도 더 많았다고 비교하기. → 대학 졸업 후 용인으로 이사해 혼자 살기 시작했다고 설명하기. → 그래서 지금은 침대, 소파, 테이블처럼 꼭 필요한 물건만 있다고 마무리하기.",
          "questionEn": "Compare your childhood home with the home you live in now. How are they different in size and atmosphere?",
          "type": "변화·비교",
          "hintSteps": [
            "가장 큰 변화는 지금 더 작은 아파트에서 혼자 산다는 점이라고 말하기.",
            "대학생 때는 서울의 더 큰 아파트에서 가족과 살았고, 방과 가구도 더 많았다고 비교하기.",
            "대학 졸업 후 용인으로 이사해 혼자 살기 시작했다고 설명하기.",
            "그래서 지금은 침대, 소파, 테이블처럼 꼭 필요한 물건만 있다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q5",
          "number": "Q5",
          "scriptOrigin": "user",
          "question": "집에 어떤 가구가 있나요? 가장 좋아하는 가구 하나를 골라 생김새와 위치를 묘사해 주세요.",
          "status": "필수",
          "answer": [
            "At home, I have a bed, a sofa, and a table.",
            "My favorite piece of furniture is the sofa in the living room, next to the table.",
            "It's white and has two soft seats.",
            "It's simple, but it's really comfortable to sit on and relax.",
            "There are also two cushions on it, which make it look cozy.",
            "So, that's my favorite piece of furniture."
          ],
          "hint": "집에 침대, 소파, 테이블이 있다고 말하기. → 가장 좋아하는 가구는 거실의 테이블 옆에 있는 소파라고 설명하기. → 흰색이고 푹신한 좌석이 2개 있다고 묘사하기. → 단순한 디자인이지만 앉아서 쉬기 매우 편하다고 말하기. → 쿠션도 2개 있어서 아늑해 보인다고 덧붙이기. → 이 소파가 가장 좋아하는 가구라고 마무리하기.",
          "questionEn": "What furniture do you have at home? Choose your favorite piece and describe its appearance and location.",
          "type": "묘사",
          "hintSteps": [
            "집에 침대, 소파, 테이블이 있다고 말하기.",
            "가장 좋아하는 가구는 거실의 테이블 옆에 있는 소파라고 설명하기.",
            "흰색이고 푹신한 좌석이 2개 있다고 묘사하기.",
            "단순한 디자인이지만 앉아서 쉬기 매우 편하다고 말하기.",
            "쿠션도 2개 있어서 아늑해 보인다고 덧붙이기.",
            "이 소파가 가장 좋아하는 가구라고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q6",
          "number": "Q6",
          "scriptOrigin": "user",
          "question": "현재 가구와 어릴 때 쓰던 가구는 어떻게 다른가요? 크기와 스타일을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "My furniture is smaller and simpler now.",
            "When I was a child, I lived with my family, so we had bigger furniture, like a big sofa and a large table.",
            "The style was more traditional back then.",
            "Now, I prefer small and simple furniture because I live in a smaller apartment."
          ],
          "hint": "지금 가구는 예전보다 작고 단순하다고 말하기. → 어릴 때는 가족과 살아 큰 소파와 큰 테이블 같은 더 큰 가구가 있었다고 설명하기. → 그때 가구는 더 전통적인 스타일이었다고 비교하기. → 지금은 더 작은 아파트에 살아 작고 단순한 가구를 선호한다고 마무리하기.",
          "questionEn": "How is your furniture different from the furniture you had as a child? Compare its size and style.",
          "type": "변화·비교",
          "hintSteps": [
            "지금 가구는 예전보다 작고 단순하다고 말하기.",
            "어릴 때는 가족과 살아 큰 소파와 큰 테이블 같은 더 큰 가구가 있었다고 설명하기.",
            "그때 가구는 더 전통적인 스타일이었다고 비교하기.",
            "지금은 더 작은 아파트에 살아 작고 단순한 가구를 선호한다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q7",
          "number": "Q7",
          "scriptOrigin": "user",
          "question": "집에서 어떤 문제가 있었나요? 두 가지 예를 들고 각각 어떻게 해결했는지 말해 주세요.",
          "status": "필수",
          "answer": [
            "Well, I had two problems.",
            "First, one of the sofa legs broke while I was sitting on it.",
            "I was really surprised.",
            "So I called a repair service, and they fixed it the next day.",
            "Second, my kitchen light stopped working while I was making dinner.",
            "So I called the building office.",
            "Someone came the next morning and fixed it."
          ],
          "hint": "집에서 두 가지 문제가 있었다고 시작하기. → 첫째, 소파에 앉아 있을 때 다리 하나가 부러졌다고 말하기. → 그때 매우 놀랐다고 감정을 말하기. → 수리 업체에 전화했고 다음 날 고쳐 주었다고 설명하기. → 둘째, 저녁을 만들던 중 주방 조명이 작동하지 않았다고 말하기. → 그래서 관리사무소에 전화했다고 설명하기. → 다음 날 아침 사람이 와서 고쳐 주었다고 마무리하기.",
          "questionEn": "What problems have you had in your home? Give two examples and explain how each problem was fixed.",
          "type": "문제 경험",
          "hintSteps": [
            "집에서 두 가지 문제가 있었다고 시작하기.",
            "첫째, 소파에 앉아 있을 때 다리 하나가 부러졌다고 말하기.",
            "그때 매우 놀랐다고 감정을 말하기.",
            "수리 업체에 전화했고 다음 날 고쳐 주었다고 설명하기.",
            "둘째, 저녁을 만들던 중 주방 조명이 작동하지 않았다고 말하기.",
            "그래서 관리사무소에 전화했다고 설명하기.",
            "다음 날 아침 사람이 와서 고쳐 주었다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q8",
          "number": "Q8",
          "scriptOrigin": "user",
          "question": "집에서 겪은 문제 한 가지를 말해 주세요. 무슨 일이 있었고, 어떻게 대처했으며, 결과는 어땠나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had with my sofa in the living room.",
            "One day, one of the sofa legs suddenly broke while I was sitting on it.",
            "I was really surprised, so I tried to fix it myself.",
            "But it didn’t work.",
            "So I called a repair service, and they fixed it the next day."
          ],
          "hint": "거실 소파에 문제가 생겼던 경험이 기억난다고 시작하기. → 어느 날 소파에 앉아 있던 중 다리 하나가 갑자기 부러졌다고 설명하기. → 매우 놀랐고 직접 고쳐 보려고 했다고 말하기. → 하지만 직접 수리하는 데 실패했다고 말하기. → 수리 업체에 전화했고 다음 날 고쳐 주었다고 마무리하기.",
          "questionEn": "Tell me about one problem you had at home. What happened, what did you do, and how did it turn out?",
          "type": "문제 경험",
          "hintSteps": [
            "거실 소파에 문제가 생겼던 경험이 기억난다고 시작하기.",
            "어느 날 소파에 앉아 있던 중 다리 하나가 갑자기 부러졌다고 설명하기.",
            "매우 놀랐고 직접 고쳐 보려고 했다고 말하기.",
            "하지만 직접 수리하는 데 실패했다고 말하기.",
            "수리 업체에 전화했고 다음 날 고쳐 주었다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q9",
          "number": "Q9",
          "scriptOrigin": "user",
          "question": "집에서 가구가 고장 난 적이 있나요? 어떤 문제였고 어떻게 대처했는지 말해 주세요.",
          "status": "필수",
          "answer": [
            "I remember one problem I had with my sofa in the living room.",
            "One day, one of the sofa legs suddenly broke while I was sitting on it.",
            "I was really surprised, so I tried to fix it myself.",
            "But it didn’t work.",
            "So I called a repair service, and they fixed it the next day."
          ],
          "hint": "거실 소파에 문제가 생겼던 경험이 기억난다고 시작하기. → 어느 날 소파에 앉아 있던 중 다리 하나가 갑자기 부러졌다고 설명하기. → 매우 놀랐고 직접 고쳐 보려고 했다고 말하기. → 하지만 직접 수리하는 데 실패했다고 말하기. → 수리 업체에 전화했고 다음 날 고쳐 주었다고 마무리하기.",
          "questionEn": "Has a piece of furniture ever broken in your home? Tell me what went wrong and how you dealt with it.",
          "type": "문제 경험",
          "hintSteps": [
            "거실 소파에 문제가 생겼던 경험이 기억난다고 시작하기.",
            "어느 날 소파에 앉아 있던 중 다리 하나가 갑자기 부러졌다고 설명하기.",
            "매우 놀랐고 직접 고쳐 보려고 했다고 말하기.",
            "하지만 직접 수리하는 데 실패했다고 말하기.",
            "수리 업체에 전화했고 다음 날 고쳐 주었다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q10",
          "number": "Q12",
          "question": "한국의 주거 형태가 어떻게 달라졌다고 생각하나요? 예전에 선호하던 집과 지금 찾는 집을 비교해 주세요.",
          "status": "선택",
          "answer": [
            "Well, I think homes in Korea have changed a lot.",
            "In the past, many families wanted big apartments.",
            "But now, more people live alone, so they often choose smaller homes.",
            "Small homes are easier to clean, and they cost less.",
            "People also want to live near stores and subway stations.",
            "So I think both price and location are very important."
          ],
          "hint": "한국의 집이 많이 바뀌었다고 시작하기. → 예전에는 가족들이 큰 아파트를 원했다고 말하기. → 지금은 혼자 사는 사람이 많아 작은 집을 고르기도 한다고 비교하기. → 작은 집은 청소가 쉽고 비용도 적게 든다고 설명하기. → 상점과 지하철역 근처에 살기를 원한다고 말하기. → 가격과 위치가 모두 중요하다고 마무리하기.",
          "questionEn": "How do you think housing in Korea has changed? Compare the homes people wanted in the past with the homes they look for now.",
          "type": "변화·비교",
          "hintSteps": [
            "한국의 집이 많이 바뀌었다고 시작하기.",
            "예전에는 가족들이 큰 아파트를 원했다고 말하기.",
            "지금은 혼자 사는 사람이 많아 작은 집을 고르기도 한다고 비교하기.",
            "작은 집은 청소가 쉽고 비용도 적게 든다고 설명하기.",
            "상점과 지하철역 근처에 살기를 원한다고 말하기.",
            "가격과 위치가 모두 중요하다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-1-q11",
          "number": "Q13",
          "question": "한국에서 집을 구할 때 무엇이 어렵나요? 가장 큰 어려움과 그 이유를 설명해 주세요.",
          "status": "선택",
          "answer": [
            "I think finding a home in Korea is not easy.",
            "The biggest problem is the price.",
            "Many people want to live near work or a subway station.",
            "But homes in those areas are usually expensive.",
            "A cheaper home may be too far from work.",
            "So people have to think about both price and location."
          ],
          "hint": "한국에서 집을 구하는 것이 쉽지 않다고 말하기. → 가장 큰 문제는 가격이라고 설명하기. → 직장이나 지하철역 근처에 살고 싶어 한다고 말하기. → 하지만 그런 지역의 집은 보통 비싸다고 설명하기. → 저렴한 집은 직장에서 너무 멀 수 있다고 말하기. → 그래서 가격과 위치를 모두 생각해야 한다고 마무리하기.",
          "questionEn": "What makes finding a home difficult in Korea? Explain the main difficulty and why it is a problem.",
          "type": "의견·이유",
          "hintSteps": [
            "한국에서 집을 구하는 것이 쉽지 않다고 말하기.",
            "가장 큰 문제는 가격이라고 설명하기.",
            "직장이나 지하철역 근처에 살고 싶어 한다고 말하기.",
            "하지만 그런 지역의 집은 보통 비싸다고 설명하기.",
            "저렴한 집은 직장에서 너무 멀 수 있다고 말하기.",
            "그래서 가격과 위치를 모두 생각해야 한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-1-q12",
          "number": "Q10",
          "scriptOrigin": "user",
          "question": "집에서 가장 좋아하는 방을 묘사해 주세요. 어디에 있고, 무엇이 있으며, 어떤 분위기인가요?",
          "status": "필수",
          "answer": [
            "I love my living room next to the kitchen because it has a really comfy sofa.",
            "I can relax there.",
            "Also, the walls are white, so they make me feel comfortable.",
            "I usually spend a lot of time in the living room watching TV and listening to music.",
            "So yeah, I really like my living room."
          ],
          "hint": "주방 옆 거실에 매우 편안한 소파가 있어 거실을 좋아한다고 말하기. → 그곳에서 쉴 수 있다고 말하기. → 벽도 흰색이라 편안하게 느껴진다고 설명하기. → 거실에서 TV를 보고 음악을 들으며 많은 시간을 보낸다고 말하기. → 그래서 거실을 정말 좋아한다고 마무리하기.",
          "questionEn": "Describe your favorite room in your home. Where is it, what is in it, and what is it like?",
          "type": "묘사",
          "hintSteps": [
            "주방 옆 거실에 매우 편안한 소파가 있어 거실을 좋아한다고 말하기.",
            "그곳에서 쉴 수 있다고 말하기.",
            "벽도 흰색이라 편안하게 느껴진다고 설명하기.",
            "거실에서 TV를 보고 음악을 들으며 많은 시간을 보낸다고 말하기.",
            "그래서 거실을 정말 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q13",
          "number": "Q11",
          "scriptOrigin": "user",
          "question": "보통 집을 어떻게 청소하나요? 언제 하는지 말하고 순서를 설명해 주세요.",
          "status": "필수",
          "answer": [
            "Well, I usually clean my apartment on weekends because I have more time.",
            "First, I clean my bedroom and sweep up any hair around my bed.",
            "Then, I go to the living room and clean the floor, especially around the sofa and the table.",
            "After that, I clean the bathroom.",
            "Finally, I sort the recycling and empty the trash can."
          ],
          "hint": "주말에는 시간이 더 많아서 보통 아파트를 청소한다고 말하기. → 먼저 침실을 청소하고 침대 주변의 머리카락을 쓸어낸다고 설명하기. → 다음으로 거실 바닥, 특히 소파와 테이블 주변을 청소한다고 말하기. → 그다음 욕실을 청소한다고 말하기. → 마지막으로 재활용품을 분류하고 쓰레기통을 비운다고 마무리하기.",
          "questionEn": "How do you normally clean your home? Tell me when you do it and explain the steps in order.",
          "type": "일과·절차",
          "hintSteps": [
            "주말에는 시간이 더 많아서 보통 아파트를 청소한다고 말하기.",
            "먼저 침실을 청소하고 침대 주변의 머리카락을 쓸어낸다고 설명하기.",
            "다음으로 거실 바닥, 특히 소파와 테이블 주변을 청소한다고 말하기.",
            "그다음 욕실을 청소한다고 말하기.",
            "마지막으로 재활용품을 분류하고 쓰레기통을 비운다고 마무리하기."
          ]
        },
        {
          "id": "topic-1-q14",
          "number": "Q14",
          "question": "집에서 가족과 보낸 기억에 남는 시간을 말해 주세요. 언제였고, 무엇을 했으며, 왜 특별했나요?",
          "status": "선택",
          "answer": [
            "I remember one special day at home with my family.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, my family and friends were waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my family and friends, and I will never forget that day."
          ],
          "hint": "집에서 가족과 함께한 특별한 날을 떠올린다고 말하기. → 내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기. → 도착해 보니 가족과 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기. → 가족과 친구들이 생일 축하 노래를 불러 줬다고 설명하기. → 정말 놀라서 거의 울 뻔했다고 말하기. → 가족과 친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기.",
          "questionEn": "Tell me about a memorable time you spent with your family at home. When was it, what did you do, and what made it special?",
          "type": "과거 경험",
          "hintSteps": [
            "집에서 가족과 함께한 특별한 날을 떠올린다고 말하기.",
            "내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기.",
            "도착해 보니 가족과 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기.",
            "가족과 친구들이 생일 축하 노래를 불러 줬다고 설명하기.",
            "정말 놀라서 거의 울 뻔했다고 말하기.",
            "가족과 친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-1-q15",
          "number": "Q15",
          "question": "집안 문제를 해결하는 방식이 본인과 부모님은 어떻게 다른가요? 평소 대처 방식을 비교하고 예를 들어 주세요.",
          "status": "선택",
          "answer": [
            "Well, my parents and I solve problems at home in different ways.",
            "My parents usually try to fix things themselves.",
            "But I often call the building office for help.",
            "For example, my kitchen light stopped working one day.",
            "I called the building office, and someone fixed it the next day.",
            "So I think asking for help is easier for me."
          ],
          "hint": "부모님과 나는 집 문제를 다른 방식으로 해결한다고 말하기. → 부모님은 보통 직접 고치려고 한다고 설명하기. → 나는 관리사무소에 도움을 요청한다고 비교하기. → 어느 날 주방 조명이 고장 났다고 예를 들기. → 관리사무소에 연락하자 다음 날 고쳐 주었다고 말하기. → 나에게는 도움을 요청하는 편이 더 쉽다고 마무리하기.",
          "questionEn": "How do you and your parents deal with problems at home differently? Compare your usual approaches and give an example.",
          "type": "변화·비교",
          "hintSteps": [
            "부모님과 나는 집 문제를 다른 방식으로 해결한다고 말하기.",
            "부모님은 보통 직접 고치려고 한다고 설명하기.",
            "나는 관리사무소에 도움을 요청한다고 비교하기.",
            "어느 날 주방 조명이 고장 났다고 예를 들기.",
            "관리사무소에 연락하자 다음 날 고쳐 주었다고 말하기.",
            "나에게는 도움을 요청하는 편이 더 쉽다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-1-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-1-q1",
            "topic-1-q5",
            "topic-1-q12"
          ]
        },
        {
          "id": "topic-1-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-1-q2",
            "topic-1-q13"
          ]
        },
        {
          "id": "topic-1-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-1-q14"
          ]
        },
        {
          "id": "topic-1-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-1-q7",
            "topic-1-q8",
            "topic-1-q9"
          ]
        },
        {
          "id": "topic-1-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-1-q3",
            "topic-1-q4",
            "topic-1-q6",
            "topic-1-q10",
            "topic-1-q15"
          ]
        },
        {
          "id": "topic-1-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-1-q11"
          ]
        }
      ]
    },
    {
      "id": "topic-2",
      "order": 2,
      "title": "집에서 보내는 휴가",
      "source": "survey",
      "questions": [
        {
          "id": "topic-2-q1",
          "number": "Q1",
          "scriptOrigin": "user",
          "question": "집에서 휴가를 보낸다고 하셨네요. 그런 날에는 보통 무엇을 하나요? 아침부터 저녁까지의 일과를 설명해 주세요.",
          "status": "필수",
          "answer": [
            "On my vacation, I usually sleep in and wake up late.",
            "Around lunchtime, I make something simple to eat, such as scrambled eggs.",
            "After lunch, I usually have a cup of coffee and listen to music for a while.",
            "In the evening, I just sit on my sofa and relax.",
            "So yeah, I really enjoy having some quiet time by myself."
          ],
          "hint": "휴가에는 보통 늦잠을 자고 늦게 일어난다고 말하기. → 점심 무렵 스크램블 에그 같은 간단한 음식을 만든다고 설명하기. → 점심 후 커피 한 잔을 마시고 잠시 음악을 듣는다고 말하기. → 저녁에는 소파에 앉아 쉰다고 말하기. → 혼자 조용한 시간을 보내는 것을 정말 좋아한다고 마무리하기.",
          "questionEn": "You said you take vacations at home. What do you usually do on those days? Describe a typical day from morning to evening.",
          "type": "일과·절차",
          "hintSteps": [
            "휴가에는 보통 늦잠을 자고 늦게 일어난다고 말하기.",
            "점심 무렵 스크램블 에그 같은 간단한 음식을 만든다고 설명하기.",
            "점심 후 커피 한 잔을 마시고 잠시 음악을 듣는다고 말하기.",
            "저녁에는 소파에 앉아 쉰다고 말하기.",
            "혼자 조용한 시간을 보내는 것을 정말 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q2",
          "number": "Q2",
          "scriptOrigin": "user",
          "question": "집에서 휴가를 보낼 때 누구와 시간을 보내고 싶나요? 그 사람의 성격과 관심사를 묘사해 주세요.",
          "status": "필수",
          "answer": [
            "Actually, during my vacation, I prefer to stay at home by myself because I’m usually busy with work.",
            "I’m a very quiet person, and I like spending time alone.",
            "I usually enjoy watching TV and listening to music.",
            "Sometimes, I order some food and eat it on my sofa.",
            "I don’t do anything special because I just want to relax.",
            "So yeah, I really enjoy having some quiet time by myself."
          ],
          "hint": "평소 일이 바빠 휴가에는 집에서 혼자 지내는 것을 선호한다고 말하기. → 나는 조용한 성격이고 혼자 시간을 보내는 것을 좋아한다고 설명하기. → 보통 TV를 보고 음악을 듣는 것을 즐긴다고 말하기. → 가끔 음식을 주문해 소파에서 먹는다고 덧붙이기. → 그냥 쉬고 싶어서 특별한 일을 하지 않는다고 말하기. → 혼자 조용한 시간을 보내는 것을 정말 좋아한다고 마무리하기.",
          "questionEn": "Who would you like to spend time with during a vacation at home? Describe that person's personality and interests.",
          "type": "묘사",
          "hintSteps": [
            "평소 일이 바빠 휴가에는 집에서 혼자 지내는 것을 선호한다고 말하기.",
            "나는 조용한 성격이고 혼자 시간을 보내는 것을 좋아한다고 설명하기.",
            "보통 TV를 보고 음악을 듣는 것을 즐긴다고 말하기.",
            "가끔 음식을 주문해 소파에서 먹는다고 덧붙이기.",
            "그냥 쉬고 싶어서 특별한 일을 하지 않는다고 말하기.",
            "혼자 조용한 시간을 보내는 것을 정말 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q3",
          "number": "Q3",
          "scriptOrigin": "user",
          "question": "가장 최근 집에서 보낸 휴가를 떠올려 보세요. 언제였고, 어떻게 시간을 보냈나요?",
          "status": "필수",
          "answer": [
            "My most recent vacation at home was last weekend.",
            "Like I said before, I slept in and woke up late.",
            "Around lunchtime, I made something simple to eat, like scrambled eggs.",
            "After lunch, I had a cup of coffee and listened to music for a while.",
            "In the evening, I just sat on my sofa and relaxed.",
            "So yeah, I really enjoyed having some quiet time by myself."
          ],
          "hint": "가장 최근 집에서 보낸 휴가는 지난 주말이었다고 말하기. → 앞서 말한 것처럼 늦잠을 자고 늦게 일어났다고 설명하기. → 점심 무렵 스크램블 에그 같은 간단한 음식을 만들었다고 말하기. → 점심 후 커피를 마시고 잠시 음악을 들었다고 말하기. → 저녁에는 소파에 앉아 쉬었다고 설명하기. → 혼자 조용한 시간을 보내서 정말 좋았다고 마무리하기.",
          "questionEn": "Think about your most recent vacation at home. When was it, and how did you spend your time?",
          "type": "과거 경험",
          "hintSteps": [
            "가장 최근 집에서 보낸 휴가는 지난 주말이었다고 말하기.",
            "앞서 말한 것처럼 늦잠을 자고 늦게 일어났다고 설명하기.",
            "점심 무렵 스크램블 에그 같은 간단한 음식을 만들었다고 말하기.",
            "점심 후 커피를 마시고 잠시 음악을 들었다고 말하기.",
            "저녁에는 소파에 앉아 쉬었다고 설명하기.",
            "혼자 조용한 시간을 보내서 정말 좋았다고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q4",
          "number": "Q4",
          "scriptOrigin": "user",
          "question": "집에서 보낸 휴가 중 기억에 남는 하루를 말해 주세요. 무슨 일이 있었고, 왜 기억에 남나요?",
          "status": "필수",
          "answer": [
            "Actually, I remember one really special day at home.",
            "It was my birthday, and I was out for a bit.",
            "My friends suddenly called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised, and I almost cried.",
            "I was so thankful to my friends.",
            "I’ll never forget that day."
          ],
          "hint": "집에서 보낸 정말 특별한 하루가 기억난다고 시작하기. → 생일이었고 잠깐 밖에 나가 있었다고 설명하기. → 친구들이 갑자기 전화해서 그곳에서 만나자고 했다고 말하기. → 도착하니 친구들이 케이크와 선물을 들고 이미 기다리고 있었다고 설명하기. → 친구들이 생일 축하 노래를 불러 주었다고 말하기. → 정말 놀랐고 거의 울 뻔했다고 감정 표현하기. → 친구들에게 정말 고마웠다고 말하기. → 그날을 절대 잊지 못할 것이라고 마무리하기.",
          "questionEn": "Tell me about a memorable day during a vacation at home. What happened, and why do you remember it?",
          "type": "과거 경험",
          "hintSteps": [
            "집에서 보낸 정말 특별한 하루가 기억난다고 시작하기.",
            "생일이었고 잠깐 밖에 나가 있었다고 설명하기.",
            "친구들이 갑자기 전화해서 그곳에서 만나자고 했다고 말하기.",
            "도착하니 친구들이 케이크와 선물을 들고 이미 기다리고 있었다고 설명하기.",
            "친구들이 생일 축하 노래를 불러 주었다고 말하기.",
            "정말 놀랐고 거의 울 뻔했다고 감정 표현하기.",
            "친구들에게 정말 고마웠다고 말하기.",
            "그날을 절대 잊지 못할 것이라고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q5",
          "number": "Q5",
          "question": "휴가를 보내는 방식이 어떻게 달라졌나요? 예전과 지금의 방식을 비교해 주세요.",
          "status": "선택",
          "answer": [
            "Well, the way I spend my vacations has changed a lot.",
            "In the past, I usually traveled and made a lot of plans.",
            "It was fun, but sometimes I felt tired after the trip.",
            "But now, I prefer staying at home by myself.",
            "I sleep in, make something simple to eat, and relax on my sofa.",
            "So yeah, a quiet vacation is better for me now."
          ],
          "hint": "휴가 보내는 방식이 많이 달라졌다고 말하기. → 예전에는 여행을 다니고 계획을 많이 세웠다고 설명하기. → 즐거웠지만 여행 뒤에 피곤하기도 했다고 말하기. → 지금은 혼자 집에서 쉬는 것을 더 좋아한다고 비교하기. → 늦잠을 자고 간단히 요리하고 소파에서 쉰다고 설명하기. → 지금은 조용한 휴가가 더 좋다고 마무리하기.",
          "questionEn": "How have your vacations changed over time? Compare the way you spent vacations in the past with what you do now.",
          "type": "변화·비교",
          "hintSteps": [
            "휴가 보내는 방식이 많이 달라졌다고 말하기.",
            "예전에는 여행을 다니고 계획을 많이 세웠다고 설명하기.",
            "즐거웠지만 여행 뒤에 피곤하기도 했다고 말하기.",
            "지금은 혼자 집에서 쉬는 것을 더 좋아한다고 비교하기.",
            "늦잠을 자고 간단히 요리하고 소파에서 쉰다고 설명하기.",
            "지금은 조용한 휴가가 더 좋다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-2-q6",
          "number": "Q6",
          "scriptOrigin": "user",
          "question": "사람들에게 휴가가 왜 필요하다고 생각하나요? 휴식이 어떤 도움이 되는지 설명해 주세요.",
          "status": "선택",
          "answer": [
            "I think people need vacations because they are usually busy with work or school.",
            "After working for a long time, people can feel tired and stressed.",
            "A vacation gives them time to rest and forget about work for a while.",
            "For me, I like staying at home, sitting on my sofa, and listening to music.",
            "I don’t do anything special because I just want to relax.",
            "So yeah, I think vacations help people feel better and get their energy back."
          ],
          "hint": "사람들은 보통 일이나 학교로 바쁘기 때문에 휴가가 필요하다고 말하기. → 오랫동안 일하면 피곤하고 스트레스를 받을 수 있다고 설명하기. → 휴가는 잠시 쉬고 일을 잊을 시간을 준다고 말하기. → 나는 집에서 소파에 앉아 음악을 들으며 쉬는 것을 좋아한다고 예를 들기. → 특별한 일은 하지 않고 그냥 쉬고 싶다고 설명하기. → 휴가는 기분을 나아지게 하고 에너지를 되찾는 데 도움이 된다고 마무리하기.",
          "questionEn": "Why do you think people need vacations? Explain how taking a break can help them.",
          "type": "의견·이유",
          "hintSteps": [
            "사람들은 보통 일이나 학교로 바쁘기 때문에 휴가가 필요하다고 말하기.",
            "오랫동안 일하면 피곤하고 스트레스를 받을 수 있다고 설명하기.",
            "휴가는 잠시 쉬고 일을 잊을 시간을 준다고 말하기.",
            "나는 집에서 소파에 앉아 음악을 들으며 쉬는 것을 좋아한다고 예를 들기.",
            "특별한 일은 하지 않고 그냥 쉬고 싶다고 설명하기.",
            "휴가는 기분을 나아지게 하고 에너지를 되찾는 데 도움이 된다고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q7",
          "number": "Q7",
          "scriptOrigin": "user",
          "question": "집에서 휴가를 보내는 것을 왜 좋아하나요? 선호하는 이유를 몇 가지 말해 주세요.",
          "status": "선택",
          "answer": [
            "I like spending my vacations at home for a few reasons.",
            "First, I’m usually busy with work, so I need some time to relax.",
            "At home, I can sleep in and do whatever I want.",
            "I can sit on my sofa, listen to music, and watch TV.",
            "So yeah, staying at home helps me relax and feel better."
          ],
          "hint": "집에서 휴가를 보내는 것을 좋아하는 이유가 몇 가지 있다고 시작하기. → 우선 평소 일이 바빠 쉬는 시간이 필요하다고 설명하기. → 집에서는 늦잠을 자고 원하는 일을 할 수 있다고 말하기. → 소파에 앉아 음악을 듣고 TV를 볼 수 있다고 덧붙이기. → 집에 머무는 것이 휴식에 도움이 되고 기분도 나아진다고 마무리하기.",
          "questionEn": "Why do you enjoy spending vacations at home? Give a few reasons for your preference.",
          "type": "의견·이유",
          "hintSteps": [
            "집에서 휴가를 보내는 것을 좋아하는 이유가 몇 가지 있다고 시작하기.",
            "우선 평소 일이 바빠 쉬는 시간이 필요하다고 설명하기.",
            "집에서는 늦잠을 자고 원하는 일을 할 수 있다고 말하기.",
            "소파에 앉아 음악을 듣고 TV를 볼 수 있다고 덧붙이기.",
            "집에 머무는 것이 휴식에 도움이 되고 기분도 나아진다고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q8",
          "number": "Q8",
          "scriptOrigin": "user",
          "question": "집에서 휴가를 보낼 때 가장 좋아하는 공간은 어디인가요? 그 공간을 묘사하고 좋아하는 이유를 설명해 주세요.",
          "status": "선택",
          "answer": [
            "During my vacation, I love spending time in my living room.",
            "It’s next to the kitchen, and it has a really comfy sofa.",
            "Also, the walls are white, so they make me feel comfortable.",
            "I usually spend a lot of time there watching TV and listening to music.",
            "So yeah, my living room is my favorite place to relax."
          ],
          "hint": "휴가에는 거실에서 시간을 보내는 것을 좋아한다고 말하기. → 거실은 주방 옆에 있고 매우 편안한 소파가 있다고 설명하기. → 벽도 흰색이라 편안하게 느껴진다고 말하기. → 거기서 TV를 보고 음악을 들으며 많은 시간을 보낸다고 설명하기. → 거실이 가장 좋아하는 휴식 공간이라고 마무리하기.",
          "questionEn": "Which part of your home do you like most during a vacation? Describe the space and explain why you like it.",
          "type": "묘사·이유",
          "hintSteps": [
            "휴가에는 거실에서 시간을 보내는 것을 좋아한다고 말하기.",
            "거실은 주방 옆에 있고 매우 편안한 소파가 있다고 설명하기.",
            "벽도 흰색이라 편안하게 느껴진다고 말하기.",
            "거기서 TV를 보고 음악을 들으며 많은 시간을 보낸다고 설명하기.",
            "거실이 가장 좋아하는 휴식 공간이라고 마무리하기."
          ]
        },
        {
          "id": "topic-2-q9",
          "number": "Q9",
          "scriptOrigin": "user",
          "question": "집에서 휴가를 보내다가 예상하지 못한 문제가 생긴 경험을 말해 주세요. 무슨 일이 있었고 어떻게 해결했나요?",
          "status": "선택",
          "answer": [
            "I remember one problem I had during my vacation at home.",
            "One day, one of the sofa legs suddenly broke while I was sitting on it.",
            "I was really surprised, so I tried to fix it myself.",
            "But it didn’t work.",
            "So I called a repair service, and they fixed it the next day."
          ],
          "hint": "집에서 휴가를 보내던 중 문제가 생긴 경험이 기억난다고 시작하기. → 어느 날 소파에 앉아 있는데 다리 하나가 갑자기 부러졌다고 설명하기. → 매우 놀라 직접 고쳐 보려고 했다고 말하기. → 하지만 직접 수리하는 데 실패했다고 말하기. → 수리 업체에 전화했고 다음 날 고쳐 주었다고 마무리하기.",
          "questionEn": "Tell me about an unexpected problem during a vacation at home. What happened, and what did you do to solve it?",
          "type": "문제 경험",
          "hintSteps": [
            "집에서 휴가를 보내던 중 문제가 생긴 경험이 기억난다고 시작하기.",
            "어느 날 소파에 앉아 있는데 다리 하나가 갑자기 부러졌다고 설명하기.",
            "매우 놀라 직접 고쳐 보려고 했다고 말하기.",
            "하지만 직접 수리하는 데 실패했다고 말하기.",
            "수리 업체에 전화했고 다음 날 고쳐 주었다고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-2-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-2-q2"
          ]
        },
        {
          "id": "topic-2-type-2",
          "title": "묘사·이유",
          "questionIds": [
            "topic-2-q8"
          ]
        },
        {
          "id": "topic-2-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-2-q1"
          ]
        },
        {
          "id": "topic-2-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-2-q3",
            "topic-2-q4"
          ]
        },
        {
          "id": "topic-2-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-2-q9"
          ]
        },
        {
          "id": "topic-2-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-2-q5"
          ]
        },
        {
          "id": "topic-2-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-2-q6",
            "topic-2-q7"
          ]
        }
      ]
    },
    {
      "id": "topic-3",
      "order": 3,
      "title": "카페 / 커피숍",
      "source": "survey",
      "questions": [
        {
          "id": "topic-3-q1",
          "number": "Q1",
          "scriptOrigin": "user",
          "question": "동네의 커피숍 하나를 묘사해 주세요. 어디에 있고, 좌석 공간과 분위기는 어떤가요?",
          "status": "필수",
          "answer": [
            "There is a cafe near my home.",
            "It’s about five minutes away on foot.",
            "The seating area is not very big, but it has some comfortable chairs and small tables.",
            "The cafe is usually quiet.",
            "I like the atmosphere because it feels calm and cozy.",
            "So yeah, I often go there when I want to have a cup of coffee and relax."
          ],
          "hint": "집 근처에 카페가 하나 있다고 말하기. → 걸어서 약 5분 거리라고 설명하기. → 좌석 공간은 크지 않지만 편안한 의자와 작은 테이블이 있다고 묘사하기. → 보통 조용한 카페라고 말하기. → 차분하고 아늑한 분위기를 좋아한다고 설명하기. → 커피를 마시고 쉬고 싶을 때 자주 간다고 마무리하기.",
          "questionEn": "Describe a coffee shop in your neighborhood. Where is it, and what are the seating area and atmosphere like?",
          "type": "묘사",
          "hintSteps": [
            "집 근처에 카페가 하나 있다고 말하기.",
            "걸어서 약 5분 거리라고 설명하기.",
            "좌석 공간은 크지 않지만 편안한 의자와 작은 테이블이 있다고 묘사하기.",
            "보통 조용한 카페라고 말하기.",
            "차분하고 아늑한 분위기를 좋아한다고 설명하기.",
            "커피를 마시고 쉬고 싶을 때 자주 간다고 마무리하기."
          ]
        },
        {
          "id": "topic-3-q2",
          "number": "Q2",
          "scriptOrigin": "user",
          "question": "처음 커피숍에 갔던 경험을 말해 주세요. 무엇을 주문했고, 무엇을 했으며, 기분은 어땠나요?",
          "status": "필수",
          "answer": [
            "I remember my first visit to a coffee shop.",
            "I went there with my friend when I was in high school.",
            "I ordered a cup of coffee and found a comfortable seat.",
            "We talked for a while and listened to music.",
            "I was a little nervous because it was my first time, but I really enjoyed it.",
            "So yeah, I still remember that day."
          ],
          "hint": "처음 커피숍에 갔던 경험이 기억난다고 시작하기. → 고등학생 때 친구와 함께 갔다고 설명하기. → 커피 한 잔을 주문하고 편안한 자리를 찾았다고 말하기. → 잠시 이야기하며 음악을 들었다고 설명하기. → 첫 방문이라 조금 긴장했지만 정말 즐거웠다고 감정을 말하기. → 그래서 아직 그날이 기억난다고 마무리하기.",
          "questionEn": "Tell me about your first visit to a coffee shop. What did you order, what did you do, and how did you feel?",
          "type": "과거 경험",
          "hintSteps": [
            "처음 커피숍에 갔던 경험이 기억난다고 시작하기.",
            "고등학생 때 친구와 함께 갔다고 설명하기.",
            "커피 한 잔을 주문하고 편안한 자리를 찾았다고 말하기.",
            "잠시 이야기하며 음악을 들었다고 설명하기.",
            "첫 방문이라 조금 긴장했지만 정말 즐거웠다고 감정을 말하기.",
            "그래서 아직 그날이 기억난다고 마무리하기."
          ]
        },
        {
          "id": "topic-3-q3",
          "number": "Q3",
          "scriptOrigin": "user",
          "question": "커피숍에 가면 보통 무엇을 하나요? 주문부터 나갈 때까지의 과정을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I go to a cafe, I usually order a cup of coffee first.",
            "Then, I find a comfortable seat and sit down.",
            "I usually check my phone or listen to music while I drink my coffee.",
            "Sometimes, I just sit there and relax for a while.",
            "Before I leave, I throw away my trash and clean up my table.",
            "So yeah, that’s what I usually do at a cafe."
          ],
          "hint": "카페에 가면 보통 먼저 커피 한 잔을 주문한다고 말하기. → 그다음 편안한 자리를 찾아 앉는다고 설명하기. → 커피를 마시면서 휴대폰을 확인하거나 음악을 듣는다고 말하기. → 가끔은 그냥 앉아서 잠시 쉰다고 덧붙이기. → 떠나기 전에 쓰레기를 버리고 테이블을 정리한다고 설명하기. → 이것이 카페에서 보통 하는 일이라고 마무리하기.",
          "questionEn": "What do you normally do when you visit a coffee shop? Describe your usual visit from ordering to leaving.",
          "type": "일과·절차",
          "hintSteps": [
            "카페에 가면 보통 먼저 커피 한 잔을 주문한다고 말하기.",
            "그다음 편안한 자리를 찾아 앉는다고 설명하기.",
            "커피를 마시면서 휴대폰을 확인하거나 음악을 듣는다고 말하기.",
            "가끔은 그냥 앉아서 잠시 쉰다고 덧붙이기.",
            "떠나기 전에 쓰레기를 버리고 테이블을 정리한다고 설명하기.",
            "이것이 카페에서 보통 하는 일이라고 마무리하기."
          ]
        },
        {
          "id": "topic-3-q4",
          "number": "Q4",
          "scriptOrigin": "user",
          "question": "가장 최근 커피숍에 갔던 경험을 말해 주세요. 언제 갔고, 그곳에서 무엇을 했나요?",
          "status": "필수",
          "answer": [
            "My most recent visit to a cafe was last weekend.",
            "I went to a cafe near my home.",
            "It was about five minutes away on foot.",
            "I ordered a cup of coffee and found a comfortable seat.",
            "I checked my phone and listened to music for a while.",
            "Then, I just sat there and relaxed.",
            "So yeah, I had a really relaxing time."
          ],
          "hint": "가장 최근 카페 방문은 지난 주말이었다고 말하기. → 집 근처 카페에 갔다고 설명하기. → 걸어서 약 5분 거리였다고 덧붙이기. → 커피를 주문하고 편안한 자리를 찾았다고 말하기. → 잠시 휴대폰을 확인하고 음악을 들었다고 설명하기. → 그다음 그냥 앉아서 쉬었다고 말하기. → 정말 편안한 시간을 보냈다고 마무리하기.",
          "questionEn": "Tell me about your most recent visit to a coffee shop. When did you go, and what did you do there?",
          "type": "과거 경험",
          "hintSteps": [
            "가장 최근 카페 방문은 지난 주말이었다고 말하기.",
            "집 근처 카페에 갔다고 설명하기.",
            "걸어서 약 5분 거리였다고 덧붙이기.",
            "커피를 주문하고 편안한 자리를 찾았다고 말하기.",
            "잠시 휴대폰을 확인하고 음악을 들었다고 설명하기.",
            "그다음 그냥 앉아서 쉬었다고 말하기.",
            "정말 편안한 시간을 보냈다고 마무리하기."
          ]
        },
        {
          "id": "topic-3-q5",
          "number": "Q5",
          "scriptOrigin": "user",
          "question": "커피숍에서 겪은 기억에 남는 경험을 말해 주세요. 그날 무슨 일이 있었고, 어떤 점이 특별했나요?",
          "status": "필수",
          "answer": [
            "I remember one special day at a cafe.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "카페에서 특별한 하루를 보낸 기억으로 시작하기. → 생일에 친구들이 전화해서 카페에서 만나자고 했다고 설명하기. → 도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 주었다고 설명하기. → 너무 놀라 거의 울 뻔했다고 감정을 말하기. → 친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기.",
          "questionEn": "Describe a memorable experience at a coffee shop. What happened that day, and what made it stand out?",
          "type": "과거 경험",
          "hintSteps": [
            "카페에서 특별한 하루를 보낸 기억으로 시작하기.",
            "생일에 친구들이 전화해서 카페에서 만나자고 했다고 설명하기.",
            "도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 주었다고 설명하기.",
            "너무 놀라 거의 울 뻔했다고 감정을 말하기.",
            "친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기."
          ]
        },
        {
          "id": "topic-3-q6",
          "number": "Q6",
          "scriptOrigin": "user",
          "question": "커피숍에서 문제가 생긴 경험을 말해 주세요. 어떤 문제였고 어떻게 처리했는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I remember one problem I had at a cafe.",
            "I ordered an iced coffee, but they gave me the wrong one by mistake.",
            "I was a little surprised, so I told the staff about the problem.",
            "They said sorry and made a new drink for me.",
            "A few minutes later, I got the right coffee.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "카페에서 문제가 생긴 경험이 기억난다고 시작하기. → 아이스커피를 주문했지만 실수로 다른 음료를 받았다고 설명하기. → 조금 놀라 직원에게 문제를 알렸다고 말하기. → 직원이 사과하고 새 음료를 만들어 주었다고 설명하기. → 몇 분 뒤 제대로 된 커피를 받았다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a time something went wrong at a coffee shop. Explain the problem and how it was handled.",
          "type": "문제 경험",
          "hintSteps": [
            "카페에서 문제가 생긴 경험이 기억난다고 시작하기.",
            "아이스커피를 주문했지만 실수로 다른 음료를 받았다고 설명하기.",
            "조금 놀라 직원에게 문제를 알렸다고 말하기.",
            "직원이 사과하고 새 음료를 만들어 주었다고 설명하기.",
            "몇 분 뒤 제대로 된 커피를 받았다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ]
        },
        {
          "id": "topic-3-q7",
          "number": "Q8",
          "question": "카페는 시간이 지나면서 어떻게 달라졌나요? 사람들이 예전에 하던 일과 지금 하는 일을 비교해 주세요.",
          "status": "선택",
          "answer": [
            "Well, I think cafes have changed a lot.",
            "In the past, people usually went to cafes to drink coffee or meet friends.",
            "But now, people also go there to study or work.",
            "Many cafes have Wi-Fi and comfortable chairs.",
            "Some people just sit alone and relax, like I do.",
            "So yeah, people use cafes in many different ways now."
          ],
          "hint": "카페가 많이 바뀌었다고 말하기. → 예전에는 커피를 마시거나 친구를 만나러 갔다고 설명하기. → 요즘은 공부나 일을 하러도 간다고 비교하기. → 많은 카페에 와이파이와 편안한 의자가 있다고 말하기. → 나처럼 혼자 앉아 쉬는 사람도 있다고 설명하기. → 지금은 카페를 다양한 용도로 이용한다고 마무리하기.",
          "questionEn": "How have coffee shops changed over the years? Compare what people used to do there with what they do now.",
          "type": "변화·비교",
          "hintSteps": [
            "카페가 많이 바뀌었다고 말하기.",
            "예전에는 커피를 마시거나 친구를 만나러 갔다고 설명하기.",
            "요즘은 공부나 일을 하러도 간다고 비교하기.",
            "많은 카페에 와이파이와 편안한 의자가 있다고 말하기.",
            "나처럼 혼자 앉아 쉬는 사람도 있다고 설명하기.",
            "지금은 카페를 다양한 용도로 이용한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-3-q8",
          "number": "Q9",
          "question": "카페가 인기 있는 이유는 무엇이라고 생각하나요? 사람들이 어떤 점을 편리하거나 즐겁게 느끼는지 설명해 주세요.",
          "status": "선택",
          "answer": [
            "I think cafes are popular because they are comfortable places to relax.",
            "People can order a drink and sit there for a while.",
            "They can meet friends or spend some time alone.",
            "Many cafes also have Wi-Fi and nice seats.",
            "I usually listen to music or check my phone when I go there.",
            "So yeah, that's why I like cafes, too."
          ],
          "hint": "카페는 편하게 쉴 수 있어 인기가 많다고 말하기. → 음료를 주문하고 잠시 앉아 있을 수 있다고 설명하기. → 친구를 만나거나 혼자 시간을 보낼 수 있다고 말하기. → 와이파이와 좋은 좌석도 있다고 덧붙이기. → 나는 음악을 듣거나 휴대폰을 확인한다고 설명하기. → 그래서 나도 카페를 좋아한다고 마무리하기.",
          "questionEn": "Why do you think coffee shops are popular? Explain what people find useful or enjoyable about them.",
          "type": "의견·이유",
          "hintSteps": [
            "카페는 편하게 쉴 수 있어 인기가 많다고 말하기.",
            "음료를 주문하고 잠시 앉아 있을 수 있다고 설명하기.",
            "친구를 만나거나 혼자 시간을 보낼 수 있다고 말하기.",
            "와이파이와 좋은 좌석도 있다고 덧붙이기.",
            "나는 음악을 듣거나 휴대폰을 확인한다고 설명하기.",
            "그래서 나도 카페를 좋아한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-3-q9",
          "number": "Q7",
          "scriptOrigin": "user",
          "question": "카페에서 주문하는 가장 좋아하는 음료는 무엇인가요? 그 음료의 어떤 점을 좋아하는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "My favorite drink to order at a cafe is iced coffee.",
            "I love it because it’s cold and not too sweet.",
            "I usually drink it when I want something cold to drink.",
            "It also helps me feel awake when I’m tired.",
            "So yeah, iced coffee is my favorite drink."
          ],
          "hint": "카페에서 가장 좋아하는 음료는 아이스커피라고 말하기. → 차갑고 너무 달지 않아서 좋아한다고 설명하기. → 차가운 음료가 마시고 싶을 때 보통 마신다고 말하기. → 피곤할 때 정신이 들도록 도와준다고 덧붙이기. → 그래서 아이스커피가 가장 좋아하는 음료라고 마무리하기.",
          "questionEn": "What is your favorite drink to order at a coffee shop? Explain what you like about it.",
          "type": "의견·이유",
          "hintSteps": [
            "카페에서 가장 좋아하는 음료는 아이스커피라고 말하기.",
            "차갑고 너무 달지 않아서 좋아한다고 설명하기.",
            "차가운 음료가 마시고 싶을 때 보통 마신다고 말하기.",
            "피곤할 때 정신이 들도록 도와준다고 덧붙이기.",
            "그래서 아이스커피가 가장 좋아하는 음료라고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-3-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-3-q1"
          ]
        },
        {
          "id": "topic-3-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-3-q3"
          ]
        },
        {
          "id": "topic-3-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-3-q2",
            "topic-3-q4",
            "topic-3-q5"
          ]
        },
        {
          "id": "topic-3-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-3-q6"
          ]
        },
        {
          "id": "topic-3-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-3-q7"
          ]
        },
        {
          "id": "topic-3-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-3-q8",
            "topic-3-q9"
          ]
        }
      ]
    },
    {
      "id": "topic-4",
      "order": 4,
      "title": "술집 / 펍",
      "source": "survey",
      "questions": [
        {
          "id": "topic-4-q1",
          "number": "Q1",
          "scriptOrigin": "user",
          "question": "좋아하는 펍을 묘사해 주세요. 어디에 있고, 탁자·조명·분위기는 어떤가요?",
          "status": "필수",
          "answer": [
            "There is a pub near my home.",
            "It’s about five minutes away on foot.",
            "The seating area isn’t very big, but it has some comfortable chairs and small tables.",
            "The pub is usually quiet.",
            "I like the atmosphere because it feels calm and cozy.",
            "So yeah, I often go there when I want to have a drink and relax."
          ],
          "hint": "집 근처에 펍이 하나 있다고 말하기. → 걸어서 약 5분 거리라고 설명하기. → 좌석 공간은 크지 않지만 편안한 의자와 작은 테이블이 있다고 묘사하기. → 보통 조용한 펍이라고 말하기. → 차분하고 아늑한 분위기를 좋아한다고 설명하기. → 한잔 마시고 쉬고 싶을 때 자주 간다고 마무리하기.",
          "questionEn": "Describe a pub you like. Where is it, and what are the tables, lighting, and atmosphere like?",
          "type": "묘사",
          "hintSteps": [
            "집 근처에 펍이 하나 있다고 말하기.",
            "걸어서 약 5분 거리라고 설명하기.",
            "좌석 공간은 크지 않지만 편안한 의자와 작은 테이블이 있다고 묘사하기.",
            "보통 조용한 펍이라고 말하기.",
            "차분하고 아늑한 분위기를 좋아한다고 설명하기.",
            "한잔 마시고 쉬고 싶을 때 자주 간다고 마무리하기."
          ]
        },
        {
          "id": "topic-4-q2",
          "number": "Q2",
          "scriptOrigin": "user",
          "question": "보통 언제 누구와 펍에 가나요? 그곳에서 주로 무엇을 하는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I usually go to a pub on weekends by myself.",
            "When I get there, I find a comfortable seat and order a drink.",
            "I usually listen to music or check my phone for a while.",
            "Sometimes, I order some food and eat it there.",
            "I don’t do anything special.",
            "So yeah, I like going to a pub alone because I can relax and have some quiet time."
          ],
          "hint": "보통 주말에 혼자 펍에 간다고 말하기. → 도착하면 편안한 자리를 찾고 음료를 주문한다고 설명하기. → 잠시 음악을 듣거나 휴대폰을 확인한다고 말하기. → 가끔 음식을 주문해 그곳에서 먹는다고 덧붙이기. → 특별한 일은 하지 않는다고 말하기. → 혼자 편안하고 조용한 시간을 보낼 수 있어 좋다고 마무리하기.",
          "questionEn": "When do you usually go to a pub, and who do you go with? Explain what you normally do while you are there.",
          "type": "일과·절차",
          "hintSteps": [
            "보통 주말에 혼자 펍에 간다고 말하기.",
            "도착하면 편안한 자리를 찾고 음료를 주문한다고 설명하기.",
            "잠시 음악을 듣거나 휴대폰을 확인한다고 말하기.",
            "가끔 음식을 주문해 그곳에서 먹는다고 덧붙이기.",
            "특별한 일은 하지 않는다고 말하기.",
            "혼자 편안하고 조용한 시간을 보낼 수 있어 좋다고 마무리하기."
          ]
        },
        {
          "id": "topic-4-q3",
          "number": "Q3",
          "scriptOrigin": "user",
          "question": "가장 최근 펍에 갔던 경험을 말해 주세요. 누구와 갔고, 저녁 시간을 어떻게 보냈나요?",
          "status": "필수",
          "answer": [
            "The last time I went to a pub was last weekend.",
            "Like I said before, I went there by myself.",
            "When I got there, I found a comfortable seat and ordered a drink.",
            "I checked my phone and listened to music for a while.",
            "Then, I just sat there and relaxed.",
            "So yeah, I had a really relaxing evening."
          ],
          "hint": "마지막으로 펍에 간 것은 지난 주말이었다고 말하기. → 앞서 말한 것처럼 혼자 갔다고 설명하기. → 도착해서 편안한 자리를 찾고 음료를 주문했다고 말하기. → 잠시 휴대폰을 확인하고 음악을 들었다고 설명하기. → 그다음 그냥 앉아서 쉬었다고 말하기. → 정말 편안한 저녁을 보냈다고 마무리하기.",
          "questionEn": "Tell me about the last time you went to a pub. Who were you with, and how did you spend the evening?",
          "type": "과거 경험",
          "hintSteps": [
            "마지막으로 펍에 간 것은 지난 주말이었다고 말하기.",
            "앞서 말한 것처럼 혼자 갔다고 설명하기.",
            "도착해서 편안한 자리를 찾고 음료를 주문했다고 말하기.",
            "잠시 휴대폰을 확인하고 음악을 들었다고 설명하기.",
            "그다음 그냥 앉아서 쉬었다고 말하기.",
            "정말 편안한 저녁을 보냈다고 마무리하기."
          ]
        },
        {
          "id": "topic-4-q4",
          "number": "Q4",
          "scriptOrigin": "user",
          "question": "처음 펍에 갔던 경험을 말해 주세요. 누구와 갔고, 무엇을 했으며, 어떤 점이 기억나나요?",
          "status": "필수",
          "answer": [
            "I remember my first visit to a pub.",
            "I went there with my friend when I was in university.",
            "We found a comfortable seat and ordered some drinks.",
            "We talked for a while and listened to music.",
            "I was a little nervous because it was my first time, but I really enjoyed it.",
            "So yeah, I still remember that day."
          ],
          "hint": "처음 펍에 갔던 경험이 기억난다고 시작하기. → 대학생 때 친구와 함께 갔다고 설명하기. → 편안한 자리를 찾고 음료를 주문했다고 말하기. → 잠시 이야기하며 음악을 들었다고 설명하기. → 첫 방문이라 조금 긴장했지만 정말 즐거웠다고 감정을 말하기. → 그래서 아직 그날이 기억난다고 마무리하기.",
          "questionEn": "Tell me about your first visit to a pub. Who went with you, what did you do, and what do you remember about it?",
          "type": "과거 경험",
          "hintSteps": [
            "처음 펍에 갔던 경험이 기억난다고 시작하기.",
            "대학생 때 친구와 함께 갔다고 설명하기.",
            "편안한 자리를 찾고 음료를 주문했다고 말하기.",
            "잠시 이야기하며 음악을 들었다고 설명하기.",
            "첫 방문이라 조금 긴장했지만 정말 즐거웠다고 감정을 말하기.",
            "그래서 아직 그날이 기억난다고 마무리하기."
          ]
        },
        {
          "id": "topic-4-q5",
          "number": "Q5",
          "scriptOrigin": "user",
          "question": "펍에서 겪은 기억에 남는 경험을 말해 주세요. 무슨 일이 있었고 왜 특별했나요?",
          "status": "필수",
          "answer": [
            "I remember one special day at a pub.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "펍에서 특별한 하루를 보낸 기억으로 시작하기. → 생일에 친구들이 전화해서 펍에서 만나자고 했다고 설명하기. → 도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 주었다고 설명하기. → 너무 놀라 거의 울 뻔했다고 감정을 말하기. → 친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기.",
          "questionEn": "Tell me about a memorable experience at a pub. What happened, and why was it special to you?",
          "type": "과거 경험",
          "hintSteps": [
            "펍에서 특별한 하루를 보낸 기억으로 시작하기.",
            "생일에 친구들이 전화해서 펍에서 만나자고 했다고 설명하기.",
            "도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 주었다고 설명하기.",
            "너무 놀라 거의 울 뻔했다고 감정을 말하기.",
            "친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기."
          ]
        },
        {
          "id": "topic-4-q6",
          "number": "Q6",
          "scriptOrigin": "user",
          "question": "펍에서 문제가 생긴 적이 있나요? 무슨 문제였고, 어떻게 대처했으며, 결과는 어땠나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had at a pub.",
            "I ordered a drink, but they gave me the wrong one by mistake.",
            "I was a little surprised, so I told the staff about the problem.",
            "They said sorry and made a new drink for me.",
            "A few minutes later, I got the right drink.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "펍에서 문제가 생긴 경험이 기억난다고 시작하기. → 음료를 주문했지만 실수로 다른 음료를 받았다고 설명하기. → 조금 놀라 직원에게 문제를 알렸다고 말하기. → 직원이 사과하고 새 음료를 만들어 주었다고 설명하기. → 몇 분 뒤 제대로 된 음료를 받았다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Have you ever had a problem at a pub? Describe what went wrong, what you did, and the result.",
          "type": "문제 경험",
          "hintSteps": [
            "펍에서 문제가 생긴 경험이 기억난다고 시작하기.",
            "음료를 주문했지만 실수로 다른 음료를 받았다고 설명하기.",
            "조금 놀라 직원에게 문제를 알렸다고 말하기.",
            "직원이 사과하고 새 음료를 만들어 주었다고 설명하기.",
            "몇 분 뒤 제대로 된 음료를 받았다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ]
        },
        {
          "id": "topic-4-q7",
          "number": "Q7",
          "question": "펍에서 시간을 보내는 방식이 어떻게 달라졌나요? 예전과 지금의 장소·동행인·머무는 시간을 비교해 주세요.",
          "status": "선택",
          "answer": [
            "Well, the way I spend time at pubs has changed a lot.",
            "When I was in university, I usually went to pubs with my friends.",
            "We talked a lot, listened to music, and sometimes stayed out late.",
            "But these days, I usually go to a quiet pub by myself on weekends.",
            "I just order a drink, check my phone, or listen to music for a while.",
            "So yeah, I prefer going alone now because I can relax and have some quiet time."
          ],
          "hint": "펍에서 시간을 보내는 방식이 많이 달라졌다고 시작하기. → 대학생 때는 보통 친구들과 펍에 갔다고 말하기. → 친구들과 이야기하고 음악을 들으며 가끔 늦게까지 있었다고 설명하기. → 요즘에는 주말에 조용한 펍에 혼자 가는 편이라고 비교하기. → 음료를 주문하고 휴대폰을 확인하거나 잠시 음악을 듣는다고 말하기. → 혼자 가면 조용히 쉬면서 편안한 시간을 보낼 수 있어 더 좋다고 마무리하기.",
          "questionEn": "How has the way you spend time at pubs changed? Compare the places, people, and length of your visits then and now.",
          "type": "변화·비교",
          "hintSteps": [
            "펍에서 시간을 보내는 방식이 많이 달라졌다고 시작하기.",
            "대학생 때는 보통 친구들과 펍에 갔다고 말하기.",
            "친구들과 이야기하고 음악을 들으며 가끔 늦게까지 있었다고 설명하기.",
            "요즘에는 주말에 조용한 펍에 혼자 가는 편이라고 비교하기.",
            "음료를 주문하고 휴대폰을 확인하거나 잠시 음악을 듣는다고 말하기.",
            "혼자 가면 조용히 쉬면서 편안한 시간을 보낼 수 있어 더 좋다고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-4-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-4-q1"
          ]
        },
        {
          "id": "topic-4-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-4-q2"
          ]
        },
        {
          "id": "topic-4-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-4-q3",
            "topic-4-q4",
            "topic-4-q5"
          ]
        },
        {
          "id": "topic-4-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-4-q6"
          ]
        },
        {
          "id": "topic-4-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-4-q7"
          ]
        }
      ]
    },
    {
      "id": "topic-5",
      "order": 5,
      "title": "공원",
      "source": "survey",
      "questions": [
        {
          "id": "topic-5-q1",
          "number": "Q1",
          "question": "좋아하는 공원을 묘사해 주세요. 어디에 있고, 크기는 어떠하며, 무엇이 보이나요?",
          "status": "필수",
          "answer": [
            "There is a park near my home.",
            "It’s about ten minutes away on foot.",
            "The park is pretty big, and there are many people taking a walk.",
            "There are also nice walking paths, and I can enjoy the fresh air there.",
            "The park is peaceful and beautiful.",
            "So yeah, I like going there when I want to relax."
          ],
          "hint": "집 근처에 공원이 있다고 말하기. → 걸어서 약 10분 거리라고 설명하기. → 꽤 큰 공원이고 산책하는 사람이 많다고 묘사하기. → 좋은 산책로가 있고 신선한 공기를 즐길 수 있다고 설명하기. → 평화롭고 아름다운 공원이라고 말하기. → 쉬고 싶을 때 가는 것을 좋아한다고 마무리하기.",
          "questionEn": "Describe a park you like. Where is it, how big is it, and what can you see there?",
          "type": "묘사",
          "scriptOrigin": "user",
          "hintSteps": [
            "집 근처에 공원이 있다고 말하기.",
            "걸어서 약 10분 거리라고 설명하기.",
            "꽤 큰 공원이고 산책하는 사람이 많다고 묘사하기.",
            "좋은 산책로가 있고 신선한 공기를 즐길 수 있다고 설명하기.",
            "평화롭고 아름다운 공원이라고 말하기.",
            "쉬고 싶을 때 가는 것을 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-5-q2",
          "number": "Q2",
          "question": "공원에서 보통 무엇을 하나요? 평소 방문할 때 하는 활동을 순서대로 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I go to the park, I usually take a walk first.",
            "I walk along the walking path and enjoy the fresh air.",
            "After that, I find a bench and sit down for a while.",
            "Sometimes, I check my phone or listen to music.",
            "So yeah, I usually go there when I want to relax."
          ],
          "hint": "공원에 가면 보통 먼저 산책한다고 말하기. → 산책로를 따라 걸으며 신선한 공기를 즐긴다고 설명하기. → 그다음 벤치를 찾아 잠시 앉는다고 말하기. → 가끔 휴대폰을 확인하거나 음악을 듣는다고 덧붙이기. → 보통 쉬고 싶을 때 공원에 간다고 마무리하기.",
          "questionEn": "What do you usually do at the park? Describe the order of your activities during a typical visit.",
          "type": "일과·절차",
          "scriptOrigin": "user",
          "hintSteps": [
            "공원에 가면 보통 먼저 산책한다고 말하기.",
            "산책로를 따라 걸으며 신선한 공기를 즐긴다고 설명하기.",
            "그다음 벤치를 찾아 잠시 앉는다고 말하기.",
            "가끔 휴대폰을 확인하거나 음악을 듣는다고 덧붙이기.",
            "보통 쉬고 싶을 때 공원에 간다고 마무리하기."
          ]
        },
        {
          "id": "topic-5-q4",
          "number": "Q4",
          "question": "가장 최근 공원에 갔던 경험을 말해 주세요. 언제 갔고, 도착해서 떠날 때까지 무엇을 했나요?",
          "status": "필수",
          "answer": [
            "My most recent trip to a park was last weekend.",
            "Like I said before, I took a walk first.",
            "I walked along the walking path and enjoyed the fresh air.",
            "After that, I found a bench and sat down for a while.",
            "I checked my phone and listened to music.",
            "Then, I went home after relaxing for a bit."
          ],
          "hint": "가장 최근 공원 방문은 지난 주말이었다고 말하기. → 앞서 말한 것처럼 먼저 산책했다고 설명하기. → 산책로를 따라 걸으며 신선한 공기를 즐겼다고 말하기. → 그다음 벤치를 찾아 잠시 앉았다고 설명하기. → 휴대폰을 확인하고 음악을 들었다고 말하기. → 조금 쉰 뒤 집에 돌아왔다고 마무리하기.",
          "questionEn": "Tell me about your most recent trip to a park. When did you go, and what did you do from arrival to departure?",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "가장 최근 공원 방문은 지난 주말이었다고 말하기.",
            "앞서 말한 것처럼 먼저 산책했다고 설명하기.",
            "산책로를 따라 걸으며 신선한 공기를 즐겼다고 말하기.",
            "그다음 벤치를 찾아 잠시 앉았다고 설명하기.",
            "휴대폰을 확인하고 음악을 들었다고 말하기.",
            "조금 쉰 뒤 집에 돌아왔다고 마무리하기."
          ]
        },
        {
          "id": "topic-5-q5",
          "number": "Q5",
          "question": "공원에서의 특별한 추억을 말해 주세요. 누구와 있었고, 어떤 점이 기억에 남나요?",
          "status": "필수",
          "answer": [
            "I remember one special day at a park.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "공원에서 특별한 하루를 보낸 기억으로 시작하기. → 생일에 친구들이 전화해서 공원에서 만나자고 했다고 설명하기. → 도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 주었다고 설명하기. → 너무 놀라 거의 울 뻔했다고 감정을 말하기. → 친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기.",
          "questionEn": "Tell me about a special memory you have of a park. Who were you with, and what made the experience memorable?",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "공원에서 특별한 하루를 보낸 기억으로 시작하기.",
            "생일에 친구들이 전화해서 공원에서 만나자고 했다고 설명하기.",
            "도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 주었다고 설명하기.",
            "너무 놀라 거의 울 뻔했다고 감정을 말하기.",
            "친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기."
          ]
        },
        {
          "id": "topic-5-q6",
          "number": "Q6",
          "question": "공원에 갔다가 겪은 문제를 말해 주세요. 어떻게 대처했고, 그 뒤에는 어떻게 되었나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had at a park.",
            "I was taking a walk along a walking path and listening to music on my phone.",
            "I accidentally dropped my phone, and it turned off.",
            "I was really worried, so I pressed the power button a few times.",
            "Luckily, it turned on again.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "공원에서 문제가 생긴 경험이 기억난다고 시작하기. → 휴대폰으로 음악을 들으며 산책로를 걷고 있었다고 설명하기. → 실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기. → 정말 걱정돼 전원 버튼을 몇 번 눌렀다고 설명하기. → 다행히 다시 켜졌다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a problem you had while visiting a park. How did you respond, and what happened afterward?",
          "type": "문제 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "공원에서 문제가 생긴 경험이 기억난다고 시작하기.",
            "휴대폰으로 음악을 들으며 산책로를 걷고 있었다고 설명하기.",
            "실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기.",
            "정말 걱정돼 전원 버튼을 몇 번 눌렀다고 설명하기.",
            "다행히 다시 켜졌다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ]
        },
        {
          "id": "topic-5-q7",
          "number": "Q7",
          "question": "어릴 때 공원에서 하던 일과 지금 하는 일을 비교해 주세요. 활동이 어떻게 달라졌나요?",
          "status": "선택",
          "answer": [
            "Well, I used to go to parks to play, but now I go there to relax.",
            "When I was a child, I played on the swings with other children.",
            "I was always running around and having fun.",
            "But now, I usually take a short walk in the park.",
            "Then, I find a bench and listen to slow music.",
            "So yeah, I enjoy parks in a different way now."
          ],
          "hint": "어릴 때는 놀러 공원에 갔지만 지금은 쉬러 간다고 말하기. → 어릴 때 다른 아이들과 그네를 탔다고 설명하기. → 뛰어놀며 재미있게 보냈다고 말하기. → 지금은 공원에서 짧게 산책한다고 비교하기. → 벤치를 찾아 잔잔한 음악을 듣는다고 설명하기. → 공원을 즐기는 방식이 달라졌다고 마무리하기.",
          "questionEn": "Compare what you did at parks as a child with what you do now. What has changed about your activities?",
          "type": "변화·비교",
          "hintSteps": [
            "어릴 때는 놀러 공원에 갔지만 지금은 쉬러 간다고 말하기.",
            "어릴 때 다른 아이들과 그네를 탔다고 설명하기.",
            "뛰어놀며 재미있게 보냈다고 말하기.",
            "지금은 공원에서 짧게 산책한다고 비교하기.",
            "벤치를 찾아 잔잔한 음악을 듣는다고 설명하기.",
            "공원을 즐기는 방식이 달라졌다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-5-q8",
          "number": "Q8",
          "question": "알고 있는 공원 두 곳을 비교해 주세요. 크기·시설·분위기가 어떻게 다른가요?",
          "status": "선택",
          "answer": [
            "There are two parks I know near my home.",
            "The first park is big and has a playground.",
            "There are many families, so it's usually noisy.",
            "But the second park is smaller and quieter.",
            "It has a walking path and some benches.",
            "So I prefer the second park because I can relax there."
          ],
          "hint": "집 근처에서 아는 공원 두 곳이 있다고 말하기. → 첫 번째 공원은 크고 놀이터가 있다고 설명하기. → 가족이 많아 대체로 시끄럽다고 말하기. → 두 번째 공원은 더 작고 조용하다고 비교하기. → 산책로와 벤치가 있다고 설명하기. → 그곳에서 쉴 수 있어 두 번째 공원이 좋다고 마무리하기.",
          "questionEn": "Compare two parks you know. How do their size, facilities, and atmosphere differ?",
          "type": "변화·비교",
          "hintSteps": [
            "집 근처에서 아는 공원 두 곳이 있다고 말하기.",
            "첫 번째 공원은 크고 놀이터가 있다고 설명하기.",
            "가족이 많아 대체로 시끄럽다고 말하기.",
            "두 번째 공원은 더 작고 조용하다고 비교하기.",
            "산책로와 벤치가 있다고 설명하기.",
            "그곳에서 쉴 수 있어 두 번째 공원이 좋다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-5-q9",
          "number": "Q9",
          "question": "공원에서 불편하게 느끼는 점 한 가지는 무엇인가요? 이유와 평소 대처 방법을 설명해 주세요.",
          "status": "선택",
          "answer": [
            "Well, one problem with parks is that they can be too crowded.",
            "On weekends, there are sometimes too many people.",
            "Then, it's hard to find an empty bench.",
            "I like quiet places, so that bothers me.",
            "When that happens, I go to a smaller park near my home.",
            "It's usually quiet, so I can sit there and relax."
          ],
          "hint": "공원이 너무 붐빌 수 있다는 점이 문제라고 말하기. → 주말에 사람이 너무 많을 때가 있다고 설명하기. → 빈 벤치를 찾기 어렵다고 말하기. → 조용한 곳을 좋아해서 불편하다고 설명하기. → 그럴 때 집 근처 작은 공원에 간다고 말하기. → 그곳에서 조용히 앉아 쉴 수 있다고 마무리하기.",
          "questionEn": "What is one thing you find inconvenient about parks? Explain why it bothers you and how you usually deal with it.",
          "type": "의견·이유",
          "hintSteps": [
            "공원이 너무 붐빌 수 있다는 점이 문제라고 말하기.",
            "주말에 사람이 너무 많을 때가 있다고 설명하기.",
            "빈 벤치를 찾기 어렵다고 말하기.",
            "조용한 곳을 좋아해서 불편하다고 설명하기.",
            "그럴 때 집 근처 작은 공원에 간다고 말하기.",
            "그곳에서 조용히 앉아 쉴 수 있다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-5-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-5-q1"
          ]
        },
        {
          "id": "topic-5-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-5-q2"
          ]
        },
        {
          "id": "topic-5-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-5-q4",
            "topic-5-q5"
          ]
        },
        {
          "id": "topic-5-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-5-q6"
          ]
        },
        {
          "id": "topic-5-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-5-q7",
            "topic-5-q8"
          ]
        },
        {
          "id": "topic-5-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-5-q9"
          ]
        }
      ]
    },
    {
      "id": "topic-6",
      "order": 6,
      "title": "해변",
      "source": "survey",
      "questions": [
        {
          "id": "topic-6-q1",
          "number": "Q1",
          "question": "가장 좋아하는 해변을 묘사해 주세요. 어디에 있고, 해변과 주변은 어떻게 생겼나요?",
          "status": "필수",
          "answer": [
            "There is a beach I like in Busan.",
            "It’s called Haeundae Beach.",
            "The beach is pretty big, and there are many people taking a walk.",
            "There are also nice walking paths, and I can enjoy the fresh air there.",
            "The beach is peaceful and beautiful.",
            "So yeah, I like going there when I want to relax."
          ],
          "hint": "부산에 좋아하는 해변이 있다고 말하기. → 이름은 해운대 해변이라고 소개하기. → 꽤 큰 해변이고 산책하는 사람이 많다고 묘사하기. → 좋은 산책로가 있고 신선한 공기를 즐길 수 있다고 설명하기. → 평화롭고 아름다운 해변이라고 말하기. → 쉬고 싶을 때 가는 것을 좋아한다고 마무리하기.",
          "questionEn": "Describe your favorite beach. Where is it, and what are the beach and the surrounding area like?",
          "type": "묘사",
          "scriptOrigin": "user",
          "hintSteps": [
            "부산에 좋아하는 해변이 있다고 말하기.",
            "이름은 해운대 해변이라고 소개하기.",
            "꽤 큰 해변이고 산책하는 사람이 많다고 묘사하기.",
            "좋은 산책로가 있고 신선한 공기를 즐길 수 있다고 설명하기.",
            "평화롭고 아름다운 해변이라고 말하기.",
            "쉬고 싶을 때 가는 것을 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-6-q2",
          "number": "Q2",
          "question": "해변에서 보통 무엇을 하나요? 평소 하는 활동을 순서대로 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I go to the beach, I usually take a walk first.",
            "I walk along the walking path and enjoy the fresh air.",
            "After that, I find a bench and sit down for a while.",
            "Sometimes, I check my phone or listen to music.",
            "So yeah, I usually go there when I want to relax."
          ],
          "hint": "해변에 가면 보통 먼저 산책한다고 말하기. → 산책로를 따라 걸으며 신선한 공기를 즐긴다고 설명하기. → 그다음 벤치를 찾아 잠시 앉는다고 말하기. → 가끔 휴대폰을 확인하거나 음악을 듣는다고 덧붙이기. → 보통 쉬고 싶을 때 해변에 간다고 마무리하기.",
          "questionEn": "What do you usually do at the beach? Describe your activities in the order you normally do them.",
          "type": "일과·절차",
          "scriptOrigin": "user",
          "hintSteps": [
            "해변에 가면 보통 먼저 산책한다고 말하기.",
            "산책로를 따라 걸으며 신선한 공기를 즐긴다고 설명하기.",
            "그다음 벤치를 찾아 잠시 앉는다고 말하기.",
            "가끔 휴대폰을 확인하거나 음악을 듣는다고 덧붙이기.",
            "보통 쉬고 싶을 때 해변에 간다고 마무리하기."
          ]
        },
        {
          "id": "topic-6-q3",
          "number": "Q3",
          "question": "가장 최근 해변에 갔던 경험을 말해 주세요. 언제 누구와 갔고, 무엇을 했나요?",
          "status": "필수",
          "answer": [
            "Well, the last time I went to the beach was about three years ago.",
            "I went to Haeundae Beach in Busan by myself.",
            "First, I took a short walk along the beach.",
            "Then, I found a bench and enjoyed the ocean view.",
            "I listened to slow music because it made me feel relaxed.",
            "So yeah, that's what I did on my last beach trip."
          ],
          "hint": "마지막 바닷가 방문은 약 3년 전이었다고 말하기. → 혼자 부산 해운대에 갔다고 설명하기. → 먼저 해변을 따라 짧게 걸었다고 말하기. → 벤치를 찾아 바다 풍경을 감상했다고 설명하기. → 편안한 기분이 들어 잔잔한 음악을 들었다고 말하기. → 마지막 바닷가 여행에서 한 일을 정리하기.",
          "questionEn": "Tell me about your last visit to a beach. When did you go, who were you with, and what did you do?",
          "type": "과거 경험",
          "hintSteps": [
            "마지막 바닷가 방문은 약 3년 전이었다고 말하기.",
            "혼자 부산 해운대에 갔다고 설명하기.",
            "먼저 해변을 따라 짧게 걸었다고 말하기.",
            "벤치를 찾아 바다 풍경을 감상했다고 설명하기.",
            "편안한 기분이 들어 잔잔한 음악을 들었다고 말하기.",
            "마지막 바닷가 여행에서 한 일을 정리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-6-q4",
          "number": "Q4",
          "question": "해변에서 하루를 보내기 위해 어떻게 준비하나요? 확인하는 것과 챙기는 물건을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "Before I go to the beach, I check the weather first.",
            "Then, I put my phone, some water, and sunscreen in my bag.",
            "I also take a hat if it's sunny.",
            "After that, I check the route on my phone.",
            "I don't want to carry too many things, so I take a small bag.",
            "So yeah, that's how I get ready for the beach."
          ],
          "hint": "해변에 가기 전에 먼저 날씨를 확인한다고 말하기. → 휴대폰, 물, 선크림을 가방에 넣는다고 설명하기. → 햇볕이 강하면 모자도 챙긴다고 말하기. → 휴대폰에서 가는 길을 확인한다고 설명하기. → 짐을 많이 들고 싶지 않아 작은 가방을 가져간다고 말하기. → 해변에 갈 준비를 이렇게 한다고 마무리하기.",
          "questionEn": "How do you prepare for a day at the beach? Explain what you check and what you take with you.",
          "type": "일과·절차",
          "hintSteps": [
            "해변에 가기 전에 먼저 날씨를 확인한다고 말하기.",
            "휴대폰, 물, 선크림을 가방에 넣는다고 설명하기.",
            "햇볕이 강하면 모자도 챙긴다고 말하기.",
            "휴대폰에서 가는 길을 확인한다고 설명하기.",
            "짐을 많이 들고 싶지 않아 작은 가방을 가져간다고 말하기.",
            "해변에 갈 준비를 이렇게 한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-6-q5",
          "number": "Q5",
          "question": "아직도 생생하게 기억나는 해변 여행을 말해 주세요. 무슨 일이 있었고, 왜 기억에 남나요?",
          "status": "필수",
          "answer": [
            "I remember one special day at Haeundae Beach in Busan.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "부산 해운대에서 있었던 특별한 날을 떠올린다고 말하기. → 내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기. → 도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 줬다고 설명하기. → 정말 놀라서 거의 울 뻔했다고 말하기. → 친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기.",
          "questionEn": "Tell me about a beach trip you still remember clearly. What happened, and why was it so memorable?",
          "type": "과거 경험",
          "hintSteps": [
            "부산 해운대에서 있었던 특별한 날을 떠올린다고 말하기.",
            "내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기.",
            "도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 줬다고 설명하기.",
            "정말 놀라서 거의 울 뻔했다고 말하기.",
            "친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-6-q6",
          "number": "Q6",
          "question": "해변에서 문제가 생긴 경험을 말해 주세요. 어떤 문제였고, 어떻게 해결했나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had at Haeundae Beach.",
            "I was taking a walk along a walking path and listening to music on my phone.",
            "I accidentally dropped my phone, and it turned off.",
            "I was really worried, so I pressed the power button a few times.",
            "Luckily, it turned on again.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "해운대 해변에서 겪은 문제 하나가 기억난다고 시작하기. → 산책로를 걸으며 휴대폰으로 음악을 듣고 있었다고 설명하기. → 실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기. → 걱정되어 전원 버튼을 몇 번 눌렀다고 설명하기. → 다행히 휴대폰이 다시 켜졌다고 말하기. → 결국 모든 것이 괜찮았다고 마무리하기.",
          "questionEn": "Tell me about something that went wrong at the beach. What was the problem, and how did you solve it?",
          "type": "문제 경험",
          "hintSteps": [
            "해운대 해변에서 겪은 문제 하나가 기억난다고 시작하기.",
            "산책로를 걸으며 휴대폰으로 음악을 듣고 있었다고 설명하기.",
            "실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기.",
            "걱정되어 전원 버튼을 몇 번 눌렀다고 설명하기.",
            "다행히 휴대폰이 다시 켜졌다고 말하기.",
            "결국 모든 것이 괜찮았다고 마무리하기."
          ]
        },
        {
          "id": "topic-6-q7",
          "number": "Q7",
          "question": "지금 해변에 가는 방식은 어릴 때와 어떻게 다른가요? 누구와 가는지와 하는 일을 비교해 주세요.",
          "status": "선택",
          "answer": [
            "Well, my beach trips are very different now.",
            "When I was a child, I went to the beach with my family.",
            "I usually played in the water and on the sand.",
            "But these days, I usually go to the beach alone.",
            "I take a short walk, sit on a bench, and listen to music.",
            "So yeah, I prefer quiet beach trips now."
          ],
          "hint": "지금은 바닷가 여행 방식이 많이 다르다고 말하기. → 어릴 때는 가족과 함께 바닷가에 갔다고 설명하기. → 물과 모래에서 놀았다고 말하기. → 요즘은 보통 혼자 바닷가에 간다고 비교하기. → 짧게 산책하고 벤치에 앉아 음악을 듣는다고 설명하기. → 지금은 조용한 바닷가 여행이 좋다고 마무리하기.",
          "questionEn": "How are your beach visits different now from when you were a child? Compare who you go with and what you do.",
          "type": "변화·비교",
          "hintSteps": [
            "지금은 바닷가 여행 방식이 많이 다르다고 말하기.",
            "어릴 때는 가족과 함께 바닷가에 갔다고 설명하기.",
            "물과 모래에서 놀았다고 말하기.",
            "요즘은 보통 혼자 바닷가에 간다고 비교하기.",
            "짧게 산책하고 벤치에 앉아 음악을 듣는다고 설명하기.",
            "지금은 조용한 바닷가 여행이 좋다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-6-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-6-q1"
          ]
        },
        {
          "id": "topic-6-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-6-q2",
            "topic-6-q4"
          ]
        },
        {
          "id": "topic-6-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-6-q3",
            "topic-6-q5"
          ]
        },
        {
          "id": "topic-6-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-6-q6"
          ]
        },
        {
          "id": "topic-6-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-6-q7"
          ]
        }
      ]
    },
    {
      "id": "topic-7",
      "order": 7,
      "title": "국내여행",
      "source": "survey",
      "questions": [
        {
          "id": "topic-7-q1",
          "number": "Q1",
          "question": "좋아하는 국내 여행지 하나를 묘사해 주세요. 어디에 있고, 주요 풍경과 주변은 어떤가요?",
          "status": "필수",
          "answer": [
            "There is a beach I like in Busan.",
            "It’s called Haeundae Beach.",
            "The beach is pretty big, and there are many people taking a walk.",
            "There are also nice walking paths, and I can enjoy the fresh air there.",
            "The beach is peaceful and beautiful.",
            "So yeah, I like going there when I want to relax."
          ],
          "hint": "부산에 좋아하는 해변이 있다고 말하기. → 이름은 해운대 해변이라고 소개하기. → 꽤 큰 해변이고 산책하는 사람이 많다고 묘사하기. → 좋은 산책로가 있고 신선한 공기를 즐길 수 있다고 설명하기. → 평화롭고 아름다운 해변이라고 말하기. → 쉬고 싶을 때 가는 것을 좋아한다고 마무리하기.",
          "questionEn": "Describe a place in Korea that you like to visit. Where is it, and what are its main sights and surroundings like?",
          "type": "묘사",
          "scriptOrigin": "user",
          "hintSteps": [
            "부산에 좋아하는 해변이 있다고 말하기.",
            "이름은 해운대 해변이라고 소개하기.",
            "꽤 큰 해변이고 산책하는 사람이 많다고 묘사하기.",
            "좋은 산책로가 있고 신선한 공기를 즐길 수 있다고 설명하기.",
            "평화롭고 아름다운 해변이라고 말하기.",
            "쉬고 싶을 때 가는 것을 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q2",
          "number": "Q2",
          "question": "짧은 국내여행에서 보통 무엇을 하나요? 여행지에서의 평소 활동을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I go to the beach, I usually take a walk first.",
            "I walk along the walking path and enjoy the fresh air.",
            "After that, I find a bench and sit down for a while.",
            "Sometimes, I check my phone or listen to music.",
            "So yeah, I usually go there when I want to relax."
          ],
          "hint": "해변에 가면 보통 먼저 산책한다고 말하기. → 산책로를 따라 걸으며 신선한 공기를 즐긴다고 설명하기. → 그다음 벤치를 찾아 잠시 앉는다고 말하기. → 가끔 휴대폰을 확인하거나 음악을 듣는다고 덧붙이기. → 보통 쉬고 싶을 때 해변에 간다고 마무리하기.",
          "questionEn": "What do you usually do during a short trip within Korea? Describe your typical activities at the destination.",
          "type": "일과·절차",
          "scriptOrigin": "user",
          "hintSteps": [
            "해변에 가면 보통 먼저 산책한다고 말하기.",
            "산책로를 따라 걸으며 신선한 공기를 즐긴다고 설명하기.",
            "그다음 벤치를 찾아 잠시 앉는다고 말하기.",
            "가끔 휴대폰을 확인하거나 음악을 듣는다고 덧붙이기.",
            "보통 쉬고 싶을 때 해변에 간다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q3",
          "number": "Q3",
          "question": "어릴 때 다녀온 국내여행을 말해 주세요. 어디에 누구와 갔고, 무엇을 했나요?",
          "status": "필수",
          "answer": [
            "When I was a child, I went to Haeundae Beach in Busan with my family.",
            "We went there during summer vacation.",
            "We took a walk along the beach and enjoyed the fresh air.",
            "We also ate some delicious food near the beach.",
            "I was really happy because I had a great time with my family.",
            "So yeah, I still remember that trip."
          ],
          "hint": "어릴 때 가족과 부산 해운대 해변에 갔다고 말하기. → 여름방학에 갔다고 설명하기. → 해변을 따라 산책하며 신선한 공기를 즐겼다고 말하기. → 해변 근처에서 맛있는 음식도 먹었다고 덧붙이기. → 가족과 즐거운 시간을 보내 정말 행복했다고 감정을 말하기. → 그래서 아직 그 여행이 기억난다고 마무리하기.",
          "questionEn": "Tell me about a trip you took in Korea as a child. Where did you go, who went with you, and what did you do?",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "어릴 때 가족과 부산 해운대 해변에 갔다고 말하기.",
            "여름방학에 갔다고 설명하기.",
            "해변을 따라 산책하며 신선한 공기를 즐겼다고 말하기.",
            "해변 근처에서 맛있는 음식도 먹었다고 덧붙이기.",
            "가족과 즐거운 시간을 보내 정말 행복했다고 감정을 말하기.",
            "그래서 아직 그 여행이 기억난다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q4",
          "number": "Q4",
          "question": "국내여행을 준비할 때 무엇을 하나요? 평소 준비 과정을 단계별로 설명해 주세요.",
          "status": "필수",
          "answer": [
            "Before I go to the beach, I usually check the weather first.",
            "Then, I pack some water, sunscreen, and my phone.",
            "I also bring a small towel with me.",
            "I don’t take too many things because I like to keep it simple.",
            "Before I leave, I check everything one more time."
          ],
          "hint": "해변에 가기 전 보통 먼저 날씨를 확인한다고 말하기. → 그다음 물, 선크림, 휴대폰을 챙긴다고 설명하기. → 작은 수건도 가져간다고 덧붙이기. → 간단하게 준비하는 것을 좋아해서 짐을 많이 챙기지 않는다고 말하기. → 떠나기 전에 모든 것을 한 번 더 확인한다고 마무리하기.",
          "questionEn": "What do you do to get ready for a domestic trip? Explain your usual preparation step by step.",
          "type": "일과·절차",
          "scriptOrigin": "user",
          "hintSteps": [
            "해변에 가기 전 보통 먼저 날씨를 확인한다고 말하기.",
            "그다음 물, 선크림, 휴대폰을 챙긴다고 설명하기.",
            "작은 수건도 가져간다고 덧붙이기.",
            "간단하게 준비하는 것을 좋아해서 짐을 많이 챙기지 않는다고 말하기.",
            "떠나기 전에 모든 것을 한 번 더 확인한다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q5",
          "number": "Q5",
          "question": "가장 최근 국내여행을 말해 주세요. 어디에 갔는지, 여행 시작부터 끝까지 무엇을 했는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "My most recent trip in Korea was to Haeundae Beach in Busan last weekend.",
            "First, I took a bus to the train station and then took a train to Busan.",
            "When I got there, I went to Haeundae Beach and took a walk along the walking path.",
            "I enjoyed the fresh air and sat on a bench for a while.",
            "Sometimes, I checked my phone and listened to music.",
            "So yeah, I had a really relaxing time and came back home in the evening."
          ],
          "hint": "가장 최근 국내여행은 지난 주말 부산 해운대 여행이었다고 말하기. → 먼저 버스로 기차역에 간 뒤 기차를 타고 부산으로 갔다고 설명하기. → 도착해서 해운대 해변 산책로를 걸었다고 말하기. → 신선한 공기를 즐기고 벤치에 잠시 앉았다고 설명하기. → 가끔 휴대폰을 확인하고 음악을 들었다고 말하기. → 정말 편안한 시간을 보내고 저녁에 귀가했다고 마무리하기.",
          "questionEn": "Tell me about your most recent trip in Korea. Explain where you went and what happened from the start to the end of the trip.",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "가장 최근 국내여행은 지난 주말 부산 해운대 여행이었다고 말하기.",
            "먼저 버스로 기차역에 간 뒤 기차를 타고 부산으로 갔다고 설명하기.",
            "도착해서 해운대 해변 산책로를 걸었다고 말하기.",
            "신선한 공기를 즐기고 벤치에 잠시 앉았다고 설명하기.",
            "가끔 휴대폰을 확인하고 음악을 들었다고 말하기.",
            "정말 편안한 시간을 보내고 저녁에 귀가했다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q6",
          "number": "Q6",
          "question": "국내여행 중 잊을 수 없는 일을 말해 주세요. 무슨 일이 있었고, 누가 함께했으며, 왜 기억에 남나요?",
          "status": "필수",
          "answer": [
            "I remember one special day during a trip to Haeundae Beach in Busan.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "부산 해운대 여행 중 특별한 하루가 기억난다고 시작하기. → 생일에 친구들이 전화해서 해운대에서 만나자고 했다고 설명하기. → 도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 주었다고 설명하기. → 너무 놀라 거의 울 뻔했다고 감정을 말하기. → 친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기.",
          "questionEn": "Tell me about an unforgettable event during a trip in Korea. What happened, who was there, and why do you remember it?",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "부산 해운대 여행 중 특별한 하루가 기억난다고 시작하기.",
            "생일에 친구들이 전화해서 해운대에서 만나자고 했다고 설명하기.",
            "도착하니 케이크와 선물을 들고 이미 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 주었다고 설명하기.",
            "너무 놀라 거의 울 뻔했다고 감정을 말하기.",
            "친구들에게 정말 고마웠고 그날을 잊지 못할 것이라고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q7",
          "number": "Q7",
          "question": "여행 중 겪은 문제를 말해 주세요. 원인·대처 방법·결과를 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I remember one problem I had during a trip in Korea.",
            "I was taking a walk along a walking path and listening to music on my phone.",
            "I accidentally dropped my phone, and it turned off.",
            "I was really worried, so I pressed the power button a few times.",
            "Luckily, it turned on again.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "국내여행 중 문제가 생긴 경험이 기억난다고 시작하기. → 휴대폰으로 음악을 들으며 산책로를 걷고 있었다고 설명하기. → 실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기. → 정말 걱정돼 전원 버튼을 몇 번 눌렀다고 설명하기. → 다행히 다시 켜졌다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a problem you faced during a trip. What caused it, how did you handle it, and what was the result?",
          "type": "문제 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "국내여행 중 문제가 생긴 경험이 기억난다고 시작하기.",
            "휴대폰으로 음악을 들으며 산책로를 걷고 있었다고 설명하기.",
            "실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기.",
            "정말 걱정돼 전원 버튼을 몇 번 눌렀다고 설명하기.",
            "다행히 다시 켜졌다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q8",
          "number": "Q9",
          "question": "여행 준비가 예전보다 쉬워졌나요, 어려워졌나요? 예전과 지금의 비용과 다른 어려움을 비교해 주세요.",
          "status": "선택",
          "answer": [
            "I think planning a trip is a little harder now because of the cost.",
            "In the past, hotels and tickets felt cheaper to me.",
            "But now, I have to spend more money on them.",
            "Popular places can also be very crowded.",
            "So I usually check prices and book early.",
            "That makes planning my trip a little easier."
          ],
          "hint": "여행 계획은 비용 때문에 지금이 조금 더 어렵다고 말하기. → 예전에는 호텔과 티켓이 더 저렴하게 느껴졌다고 설명하기. → 지금은 더 많은 돈을 써야 한다고 비교하기. → 인기 장소는 매우 붐빌 수도 있다고 말하기. → 그래서 가격을 확인하고 일찍 예약한다고 설명하기. → 그러면 여행 계획이 조금 더 쉬워진다고 마무리하기.",
          "questionEn": "Do you find travel planning easier or harder than before? Compare the costs and other difficulties then and now.",
          "type": "변화·비교",
          "hintSteps": [
            "여행 계획은 비용 때문에 지금이 조금 더 어렵다고 말하기.",
            "예전에는 호텔과 티켓이 더 저렴하게 느껴졌다고 설명하기.",
            "지금은 더 많은 돈을 써야 한다고 비교하기.",
            "인기 장소는 매우 붐빌 수도 있다고 말하기.",
            "그래서 가격을 확인하고 일찍 예약한다고 설명하기.",
            "그러면 여행 계획이 조금 더 쉬워진다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-7-q9",
          "number": "Q10",
          "question": "여행을 계획할 때 사람들은 무엇을 걱정하나요? 몇 가지 걱정과 그 이유를 설명해 주세요.",
          "status": "선택",
          "answer": [
            "Well, I think people worry about the cost when they plan a trip.",
            "Hotels, food, and tickets can be expensive.",
            "They also worry about crowded places and long lines.",
            "Nobody wants to spend a vacation just waiting.",
            "So I think it's a good idea to check prices first.",
            "Booking tickets early can also help."
          ],
          "hint": "여행을 계획할 때 사람들이 비용을 걱정한다고 말하기. → 호텔과 음식, 티켓이 비쌀 수 있다고 설명하기. → 붐비는 장소와 긴 대기 줄도 걱정한다고 말하기. → 휴가를 기다리는 데만 쓰고 싶지는 않다고 설명하기. → 그래서 먼저 가격을 확인하는 것이 좋다고 말하기. → 티켓을 일찍 예약하는 것도 도움이 된다고 마무리하기.",
          "questionEn": "What do people worry about when planning a trip? Describe a few concerns and explain why they matter.",
          "type": "의견·이유",
          "hintSteps": [
            "여행을 계획할 때 사람들이 비용을 걱정한다고 말하기.",
            "호텔과 음식, 티켓이 비쌀 수 있다고 설명하기.",
            "붐비는 장소와 긴 대기 줄도 걱정한다고 말하기.",
            "휴가를 기다리는 데만 쓰고 싶지는 않다고 설명하기.",
            "그래서 먼저 가격을 확인하는 것이 좋다고 말하기.",
            "티켓을 일찍 예약하는 것도 도움이 된다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-7-q10",
          "number": "Q8",
          "question": "국내 여행지까지 보통 어떻게 이동하나요? 집을 나서서 목적지에 도착할 때까지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I travel in Korea, I usually go to Haeundae Beach in Busan.",
            "First, I take a bus from my home to the train station.",
            "Then, I take a train to Busan.",
            "When I get there, I take the subway to Haeundae Beach.",
            "It takes some time, but the trip is pretty easy."
          ],
          "hint": "국내여행을 할 때 보통 부산 해운대 해변에 간다고 말하기. → 먼저 집에서 기차역까지 버스를 탄다고 설명하기. → 그다음 기차를 타고 부산으로 간다고 말하기. → 부산에 도착하면 지하철로 해운대 해변까지 간다고 설명하기. → 시간은 조금 걸리지만 이동은 꽤 쉽다고 마무리하기.",
          "questionEn": "How do you usually get to a travel destination in Korea? Explain the trip from leaving home to arriving there.",
          "type": "일과·절차",
          "scriptOrigin": "user",
          "hintSteps": [
            "국내여행을 할 때 보통 부산 해운대 해변에 간다고 말하기.",
            "먼저 집에서 기차역까지 버스를 탄다고 설명하기.",
            "그다음 기차를 타고 부산으로 간다고 말하기.",
            "부산에 도착하면 지하철로 해운대 해변까지 간다고 설명하기.",
            "시간은 조금 걸리지만 이동은 꽤 쉽다고 마무리하기."
          ]
        },
        {
          "id": "topic-7-q11",
          "number": "Q11",
          "question": "국내여행에서 보통 어떤 숙소에 머무나요? 숙소를 묘사하고 본인에게 맞는 이유를 설명해 주세요.",
          "status": "선택",
          "answer": [
            "When I visit Busan, I usually stay at a hotel near Haeundae Beach.",
            "The room has a bed, a small table, and a bathroom.",
            "I like a quiet room with a nice view.",
            "The beach is close, so I can easily take a walk there.",
            "After a busy day, I just sit in my room and relax.",
            "So yeah, a simple and quiet hotel is perfect for me."
          ],
          "hint": "부산에 가면 보통 해운대 근처 호텔에 묵는다고 말하기. → 방에 침대, 작은 탁자, 욕실이 있다고 설명하기. → 조용하고 전망 좋은 방을 좋아한다고 말하기. → 해변이 가까워 쉽게 산책할 수 있다고 설명하기. → 바쁜 하루 뒤에는 객실에서 앉아 쉰다고 말하기. → 단순하고 조용한 호텔이 나에게 좋다고 마무리하기.",
          "questionEn": "What kind of place do you usually stay in on a domestic trip? Describe it and explain why it suits you.",
          "type": "묘사·이유",
          "hintSteps": [
            "부산에 가면 보통 해운대 근처 호텔에 묵는다고 말하기.",
            "방에 침대, 작은 탁자, 욕실이 있다고 설명하기.",
            "조용하고 전망 좋은 방을 좋아한다고 말하기.",
            "해변이 가까워 쉽게 산책할 수 있다고 설명하기.",
            "바쁜 하루 뒤에는 객실에서 앉아 쉰다고 말하기.",
            "단순하고 조용한 호텔이 나에게 좋다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-7-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-7-q1"
          ]
        },
        {
          "id": "topic-7-type-2",
          "title": "묘사·이유",
          "questionIds": [
            "topic-7-q11"
          ]
        },
        {
          "id": "topic-7-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-7-q2",
            "topic-7-q4",
            "topic-7-q10"
          ]
        },
        {
          "id": "topic-7-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-7-q3",
            "topic-7-q5",
            "topic-7-q6"
          ]
        },
        {
          "id": "topic-7-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-7-q7"
          ]
        },
        {
          "id": "topic-7-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-7-q8"
          ]
        },
        {
          "id": "topic-7-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-7-q9"
          ]
        }
      ]
    },
    {
      "id": "topic-8",
      "order": 8,
      "title": "음악",
      "source": "survey",
      "questions": [
        {
          "id": "topic-8-q1",
          "number": "Q1",
          "question": "좋아하는 음악과 가수 한 명을 묘사해 주세요. 노래와 가수의 목소리는 어떤가요?",
          "status": "필수",
          "answer": [
            "I usually like calm and relaxing music.",
            "My favorite singer is IU, a famous singer in Korea.",
            "Her songs are soft and easy to listen to.",
            "I really like her voice because it is clear and beautiful.",
            "I usually listen to her music when I want to relax.",
            "So yeah, her music always makes me feel comfortable."
          ],
          "hint": "보통 차분하고 편안한 음악을 좋아한다고 말하기. → 가장 좋아하는 가수는 한국의 유명 가수 아이유라고 소개하기. → 노래가 부드럽고 듣기 편하다고 설명하기. → 목소리가 맑고 아름다워 정말 좋아한다고 말하기. → 쉬고 싶을 때 보통 아이유의 음악을 듣는다고 설명하기. → 아이유의 음악이 항상 편안하게 해 준다고 마무리하기.",
          "questionEn": "Describe the music you enjoy and a singer you like. What are the songs and the singer's voice like?",
          "type": "묘사",
          "scriptOrigin": "user",
          "hintSteps": [
            "보통 차분하고 편안한 음악을 좋아한다고 말하기.",
            "가장 좋아하는 가수는 한국의 유명 가수 아이유라고 소개하기.",
            "노래가 부드럽고 듣기 편하다고 설명하기.",
            "목소리가 맑고 아름다워 정말 좋아한다고 말하기.",
            "쉬고 싶을 때 보통 아이유의 음악을 듣는다고 설명하기.",
            "아이유의 음악이 항상 편안하게 해 준다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q2",
          "number": "Q2",
          "question": "처음 음악에 관심을 갖게 된 계기는 무엇인가요? 관심을 갖게 만든 경험을 말해 주세요.",
          "status": "필수",
          "answer": [
            "I first became interested in music when I was in high school.",
            "One of my friends recommended a song to me, so I listened to it on my phone.",
            "I really liked the song because it was calm and relaxing.",
            "After that, I listened to music when I was taking a walk or resting at home.",
            "That’s how I became interested in music."
          ],
          "hint": "고등학생 때 처음 음악에 관심을 갖게 됐다고 말하기. → 친구가 노래를 추천해서 휴대폰으로 들어 봤다고 설명하기. → 차분하고 편안한 노래라 정말 좋았다고 말하기. → 그 후 산책하거나 집에서 쉴 때 음악을 들었다고 설명하기. → 이렇게 음악에 관심을 갖게 됐다고 마무리하기.",
          "questionEn": "How did you first become interested in music? Tell me about the experience that got you interested.",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "고등학생 때 처음 음악에 관심을 갖게 됐다고 말하기.",
            "친구가 노래를 추천해서 휴대폰으로 들어 봤다고 설명하기.",
            "차분하고 편안한 노래라 정말 좋았다고 말하기.",
            "그 후 산책하거나 집에서 쉴 때 음악을 들었다고 설명하기.",
            "이렇게 음악에 관심을 갖게 됐다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q3",
          "number": "Q3",
          "question": "음악 취향이 어떻게 달라졌나요? 예전에 좋아하던 음악과 지금 선호하는 음악을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "My taste in music has changed over time.",
            "In the past, I liked fast and exciting music.",
            "I usually listened to it when I was with my friends.",
            "But now, I prefer calm and relaxing music.",
            "I usually listen to music when I take a walk or relax at home.",
            "So now, I like music that makes me feel comfortable."
          ],
          "hint": "시간이 지나면서 음악 취향이 달라졌다고 시작하기. → 예전에는 빠르고 신나는 음악을 좋아했다고 설명하기. → 친구들과 함께 있을 때 주로 들었다고 말하기. → 지금은 차분하고 편안한 음악을 선호한다고 비교하기. → 산책하거나 집에서 쉴 때 보통 음악을 듣는다고 말하기. → 그래서 지금은 편안하게 해 주는 음악을 좋아한다고 마무리하기.",
          "questionEn": "How has your taste in music changed? Compare the music you liked before with the music you prefer now.",
          "type": "변화·비교",
          "scriptOrigin": "user",
          "hintSteps": [
            "시간이 지나면서 음악 취향이 달라졌다고 시작하기.",
            "예전에는 빠르고 신나는 음악을 좋아했다고 설명하기.",
            "친구들과 함께 있을 때 주로 들었다고 말하기.",
            "지금은 차분하고 편안한 음악을 선호한다고 비교하기.",
            "산책하거나 집에서 쉴 때 보통 음악을 듣는다고 말하기.",
            "그래서 지금은 편안하게 해 주는 음악을 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q4",
          "number": "Q4",
          "question": "보통 언제 어디서 음악을 듣나요? 음악을 고르고 재생하는 방법을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I usually listen to music when I take a walk or relax at home.",
            "I use a music app on my smartphone.",
            "First, I open the app and choose a song from my playlist.",
            "Then, I press play and listen to it with my earphones.",
            "So yeah, listening to music is very easy and relaxing for me."
          ],
          "hint": "산책하거나 집에서 쉴 때 보통 음악을 듣는다고 말하기. → 스마트폰의 음악 앱을 사용한다고 설명하기. → 먼저 앱을 열고 재생 목록에서 노래를 고른다고 말하기. → 그다음 재생 버튼을 누르고 이어폰으로 듣는다고 설명하기. → 음악 듣기는 매우 쉽고 편안한 일이라고 마무리하기.",
          "questionEn": "When and where do you usually listen to music? Explain how you choose and play your music.",
          "type": "일과·절차",
          "scriptOrigin": "user",
          "hintSteps": [
            "산책하거나 집에서 쉴 때 보통 음악을 듣는다고 말하기.",
            "스마트폰의 음악 앱을 사용한다고 설명하기.",
            "먼저 앱을 열고 재생 목록에서 노래를 고른다고 말하기.",
            "그다음 재생 버튼을 누르고 이어폰으로 듣는다고 설명하기.",
            "음악 듣기는 매우 쉽고 편안한 일이라고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q5",
          "number": "Q5",
          "question": "빠른 음악과 잔잔한 음악을 비교해 주세요. 소리와 느껴지는 기분이 어떻게 다른가요?",
          "status": "필수",
          "answer": [
            "Fast music is loud and exciting, and it makes me feel energetic.",
            "I like listening to it when I want to feel more active.",
            "On the other hand, slow music is soft and relaxing.",
            "It makes me feel calm and comfortable.",
            "These days, I prefer slow music because I usually listen to music when I take a walk or relax at home."
          ],
          "hint": "빠른 음악은 크고 신나며 활기찬 기분이 들게 한다고 설명하기. → 더 활동적인 기분을 느끼고 싶을 때 듣는 것을 좋아한다고 말하기. → 반면 느린 음악은 부드럽고 편안하다고 비교하기. → 차분하고 편안한 기분이 들게 한다고 설명하기. → 요즘은 산책하거나 집에서 쉴 때 들어서 느린 음악을 선호한다고 마무리하기.",
          "questionEn": "Compare fast music with slow music. How do they sound different, and how do they make you feel?",
          "type": "변화·비교",
          "scriptOrigin": "user",
          "hintSteps": [
            "빠른 음악은 크고 신나며 활기찬 기분이 들게 한다고 설명하기.",
            "더 활동적인 기분을 느끼고 싶을 때 듣는 것을 좋아한다고 말하기.",
            "반면 느린 음악은 부드럽고 편안하다고 비교하기.",
            "차분하고 편안한 기분이 들게 한다고 설명하기.",
            "요즘은 산책하거나 집에서 쉴 때 들어서 느린 음악을 선호한다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q6",
          "number": "Q6",
          "question": "음악을 듣는 방식이 어떻게 달라졌나요? 예전과 지금의 기기와 방법을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "The way I listen to music has changed a lot.",
            "In the past, I used an MP3 player and saved songs on it.",
            "It was a little inconvenient because I had to download songs first.",
            "But now, I use a music app on my smartphone.",
            "I can search for songs and listen to them anytime and anywhere.",
            "So now, listening to music is much easier and more convenient."
          ],
          "hint": "음악을 듣는 방법이 많이 달라졌다고 시작하기. → 예전에는 MP3 플레이어에 노래를 저장해 사용했다고 설명하기. → 노래를 먼저 내려받아야 해서 조금 불편했다고 말하기. → 지금은 스마트폰의 음악 앱을 사용한다고 비교하기. → 언제 어디서나 노래를 검색하고 들을 수 있다고 설명하기. → 그래서 음악 듣기가 훨씬 쉽고 편리해졌다고 마무리하기.",
          "questionEn": "How has the way you listen to music changed? Compare the devices and methods you used before with those you use now.",
          "type": "변화·비교",
          "scriptOrigin": "user",
          "hintSteps": [
            "음악을 듣는 방법이 많이 달라졌다고 시작하기.",
            "예전에는 MP3 플레이어에 노래를 저장해 사용했다고 설명하기.",
            "노래를 먼저 내려받아야 해서 조금 불편했다고 말하기.",
            "지금은 스마트폰의 음악 앱을 사용한다고 비교하기.",
            "언제 어디서나 노래를 검색하고 들을 수 있다고 설명하기.",
            "그래서 음악 듣기가 훨씬 쉽고 편리해졌다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q7",
          "number": "Q7",
          "question": "라이브 음악을 들었던 경험을 말해 주세요. 어디에 있었고, 무슨 일이 있었으며, 무엇이 가장 기억나나요?",
          "status": "필수",
          "answer": [
            "I remember one time I heard live music at a small cafe.",
            "I went there with my friend on the weekend.",
            "A singer was singing and playing the guitar.",
            "The music was calm and relaxing, and I really liked the singer’s voice.",
            "I was surprised because the live music was better than I thought.",
            "That’s why I still remember that day."
          ],
          "hint": "작은 카페에서 라이브 음악을 들은 경험이 기억난다고 시작하기. → 주말에 친구와 함께 갔다고 설명하기. → 가수가 노래하며 기타를 연주하고 있었다고 말하기. → 음악은 차분하고 편안했고 가수의 목소리가 정말 좋았다고 설명하기. → 라이브 음악이 생각보다 좋아서 놀랐다고 말하기. → 그래서 아직 그날이 기억난다고 마무리하기.",
          "questionEn": "Tell me about a time you heard live music. Where were you, what happened, and what do you remember most?",
          "type": "과거 경험",
          "scriptOrigin": "user",
          "hintSteps": [
            "작은 카페에서 라이브 음악을 들은 경험이 기억난다고 시작하기.",
            "주말에 친구와 함께 갔다고 설명하기.",
            "가수가 노래하며 기타를 연주하고 있었다고 말하기.",
            "음악은 차분하고 편안했고 가수의 목소리가 정말 좋았다고 설명하기.",
            "라이브 음악이 생각보다 좋아서 놀랐다고 말하기.",
            "그래서 아직 그날이 기억난다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q8",
          "number": "Q8",
          "question": "음악을 들을 때 사용하는 기기나 앱을 묘사해 주세요. 어떤 기능이 있고, 무엇이 편리한가요?",
          "status": "선택",
          "answer": [
            "I usually listen to music on my smartphone.",
            "I use a music app, and it has many useful features.",
            "I can search for songs, make playlists, and save my favorite songs.",
            "It is very convenient because I can listen to music anytime and anywhere.",
            "I usually use it when I take a walk or want to relax.",
            "So yeah, my smartphone makes listening to music really easy."
          ],
          "hint": "보통 스마트폰으로 음악을 듣는다고 말하기. → 유용한 기능이 많은 음악 앱을 사용한다고 설명하기. → 노래 검색, 재생 목록 만들기, 좋아하는 노래 저장이 가능하다고 말하기. → 언제 어디서나 들을 수 있어 매우 편리하다고 설명하기. → 산책하거나 쉬고 싶을 때 보통 사용한다고 말하기. → 스마트폰 덕분에 음악 듣기가 정말 쉬워졌다고 마무리하기.",
          "questionEn": "Describe the device or app you use for music. What features does it have, and what is convenient about it?",
          "type": "묘사",
          "scriptOrigin": "user",
          "hintSteps": [
            "보통 스마트폰으로 음악을 듣는다고 말하기.",
            "유용한 기능이 많은 음악 앱을 사용한다고 설명하기.",
            "노래 검색, 재생 목록 만들기, 좋아하는 노래 저장이 가능하다고 말하기.",
            "언제 어디서나 들을 수 있어 매우 편리하다고 설명하기.",
            "산책하거나 쉬고 싶을 때 보통 사용한다고 말하기.",
            "스마트폰 덕분에 음악 듣기가 정말 쉬워졌다고 마무리하기."
          ]
        },
        {
          "id": "topic-8-q9",
          "number": "Q9",
          "question": "음악을 듣다가 문제가 생긴 경험을 말해 주세요. 무엇이 작동하지 않았고, 어떻게 해결했나요?",
          "status": "선택",
          "answer": [
            "Well, I remember one problem I had while listening to music.",
            "One day, my earphones suddenly stopped working.",
            "I checked my phone, but the music was still playing.",
            "Then, I found that the earphones were not connected.",
            "So I connected them again, and luckily, I could hear the music.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "음악을 듣다가 겪은 문제를 떠올린다고 말하기. → 어느 날 이어폰이 갑자기 작동하지 않았다고 설명하기. → 휴대폰을 확인했지만 음악은 재생 중이었다고 말하기. → 이어폰 연결이 끊긴 것을 발견했다고 설명하기. → 다시 연결하자 다행히 음악이 들렸다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a problem you had while listening to music. What stopped working, and how did you fix it?",
          "type": "문제 경험",
          "hintSteps": [
            "음악을 듣다가 겪은 문제를 떠올린다고 말하기.",
            "어느 날 이어폰이 갑자기 작동하지 않았다고 설명하기.",
            "휴대폰을 확인했지만 음악은 재생 중이었다고 말하기.",
            "이어폰 연결이 끊긴 것을 발견했다고 설명하기.",
            "다시 연결하자 다행히 음악이 들렸다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-8-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-8-q1",
            "topic-8-q8"
          ]
        },
        {
          "id": "topic-8-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-8-q4"
          ]
        },
        {
          "id": "topic-8-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-8-q2",
            "topic-8-q7"
          ]
        },
        {
          "id": "topic-8-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-8-q9"
          ]
        },
        {
          "id": "topic-8-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-8-q3",
            "topic-8-q5",
            "topic-8-q6"
          ]
        }
      ]
    },
    {
      "id": "topic-10",
      "order": 10,
      "title": "롤플레이 최소암기 세트",
      "source": "roleplay",
      "questions": [
        {
          "id": "topic-10-rp1",
          "number": "RP1",
          "question": "주말에 친구와 약속을 잡으려고 합니다. 친구에게 전화해서 언제 어디서 만날지 정하기 위한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hey, I want to meet you this weekend.",
            "Are you free on Saturday?",
            "Where should we meet?",
            "What time should we meet?",
            "Let me know what works for you."
          ],
          "hint": "이번 주말에 친구를 만나고 싶다고 말하기. → 토요일에 시간이 있는지 묻기. → 어디에서 만날지 묻기. → 몇 시에 만날지 묻기. → 친구에게 가능한 계획을 알려 달라고 하며 마무리하기.",
          "questionEn": "You want to make plans with a friend for the weekend. Call your friend and ask three questions to decide when and where to meet.",
          "type": "정보 문의",
          "hintSteps": [
            "이번 주말에 친구를 만나고 싶다고 말하기.",
            "토요일에 시간이 있는지 묻기.",
            "어디에서 만날지 묻기.",
            "몇 시에 만날지 묻기.",
            "친구에게 가능한 계획을 알려 달라고 하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-rp2",
          "number": "RP2",
          "question": "이번 주말에 동네 박물관을 방문하려고 합니다. 박물관에 전화해서 방문에 관한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I want to visit your museum this weekend.",
            "What time do you open on Saturday?",
            "Do I need to book a ticket?",
            "How much is one ticket?",
            "Thank you for your help."
          ],
          "hint": "이번 주말에 박물관을 방문하고 싶다고 용건 말하기. → 토요일에 몇 시에 여는지 묻기. → 표를 예약해야 하는지 묻기. → 표 한 장의 가격 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You want to visit a local museum this weekend. Call the museum and ask three questions about visiting.",
          "type": "정보 문의",
          "hintSteps": [
            "이번 주말에 박물관을 방문하고 싶다고 용건 말하기.",
            "토요일에 몇 시에 여는지 묻기.",
            "표를 예약해야 하는지 묻기.",
            "표 한 장의 가격 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-rp3",
          "number": "RP3",
          "question": "몸이 아파 오늘 친구를 만날 수 없습니다. 친구에게 전화해 상황을 설명하고 다른 계획 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hey, I'm really sorry, but I can't meet you today.",
            "I'm not feeling well, so I need to stay home and rest.",
            "Could we meet next weekend instead?",
            "Or could we talk on the phone tonight?",
            "What do you think?"
          ],
          "hint": "오늘 친구를 만날 수 없다고 말하며 사과하기. → 몸이 좋지 않아 집에서 쉬어야 한다고 설명하기. → 첫 번째 대안으로 다음 주말에 만나자고 제안하기. → 두 번째 대안으로 오늘 밤 전화로 이야기하자고 제안하기. → 어떤 방법이 좋은지 친구에게 물으며 마무리하기.",
          "questionEn": "You are sick and cannot meet your friend today. Call your friend, explain the situation, and suggest two other plans.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "오늘 친구를 만날 수 없다고 말하며 사과하기.",
            "몸이 좋지 않아 집에서 쉬어야 한다고 설명하기.",
            "첫 번째 대안으로 다음 주말에 만나자고 제안하기.",
            "두 번째 대안으로 오늘 밤 전화로 이야기하자고 제안하기.",
            "어떤 방법이 좋은지 친구에게 물으며 마무리하기."
          ]
        },
        {
          "id": "topic-10-rp4",
          "number": "RP4",
          "question": "날짜가 잘못된 콘서트 티켓을 받았습니다. 예매처에 전화해 문제를 설명하고 해결 방법 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hi, I have a problem with my concert ticket.",
            "I booked a ticket for Saturday, but it says Friday.",
            "Could you change it to Saturday?",
            "If that's not possible, could I get a refund?",
            "I can't go on Friday.",
            "Thank you for your help."
          ],
          "hint": "콘서트 티켓에 문제가 있어 전화했다고 말하기. → 토요일 표를 예약했는데 티켓에는 금요일이라고 적혀 있다고 설명하기. → 첫 번째 해결책으로 토요일 표로 바꿔 달라고 요청하기. → 변경이 안 되면 두 번째 해결책으로 환불을 요청하기. → 금요일에는 갈 수 없다고 덧붙이기. → 도움에 감사하며 마무리하기.",
          "questionEn": "You received a ticket for the wrong concert date. Call the ticket office, explain the problem, and suggest two ways to resolve it.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "콘서트 티켓에 문제가 있어 전화했다고 말하기.",
            "토요일 표를 예약했는데 티켓에는 금요일이라고 적혀 있다고 설명하기.",
            "첫 번째 해결책으로 토요일 표로 바꿔 달라고 요청하기.",
            "변경이 안 되면 두 번째 해결책으로 환불을 요청하기.",
            "금요일에는 갈 수 없다고 덧붙이기.",
            "도움에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-rp5",
          "number": "RP5",
          "question": "친구와의 약속을 바꿔야 했던 적이 있나요? 이유·대처·결과를 말해 주세요.",
          "status": "필수",
          "answer": [
            "I remember one time I had to change plans with a friend.",
            "We planned to meet at a cafe, but I was sick.",
            "So I called my friend and said sorry.",
            "I asked if we could meet the next weekend.",
            "My friend said okay, and we met a week later.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "친구와 약속을 바꿔야 했던 경험이 기억난다고 시작하기. → 카페에서 만나기로 했지만 몸이 아팠다고 설명하기. → 친구에게 전화해 사과했다고 말하기. → 다음 주말에 만날 수 있는지 물었다고 말하기. → 친구가 괜찮다고 했고 일주일 뒤에 만났다고 결과 설명하기. → 결국 잘 해결되었다고 마무리하기.",
          "questionEn": "Have you ever had to change plans with a friend? Tell me why the plans changed, what you did, and how it turned out.",
          "type": "문제 경험",
          "hintSteps": [
            "친구와 약속을 바꿔야 했던 경험이 기억난다고 시작하기.",
            "카페에서 만나기로 했지만 몸이 아팠다고 설명하기.",
            "친구에게 전화해 사과했다고 말하기.",
            "다음 주말에 만날 수 있는지 물었다고 말하기.",
            "친구가 괜찮다고 했고 일주일 뒤에 만났다고 결과 설명하기.",
            "결국 잘 해결되었다고 마무리하기."
          ]
        },
        {
          "id": "topic-10-mp3-rp1",
          "number": "MP3-RP1",
          "question": "MP3 플레이어에 관심이 있습니다. 전자제품 매장에 전화해 구매 전에 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I want to buy an MP3 player.",
            "How much is it?",
            "Do you have it in black?",
            "Can I buy it online?",
            "Thank you for your help."
          ],
          "hint": "MP3 플레이어를 사고 싶다고 용건 말하기. → 제품 가격 묻기. → 검은색 제품이 있는지 묻기. → 온라인으로 살 수 있는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You are interested in an MP3 player. Call an electronics store and ask three questions before buying it.",
          "type": "정보 문의",
          "hintSteps": [
            "MP3 플레이어를 사고 싶다고 용건 말하기.",
            "제품 가격 묻기.",
            "검은색 제품이 있는지 묻기.",
            "온라인으로 살 수 있는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-mp3-rp2",
          "number": "MP3-RP2",
          "question": "친구에게 빌린 MP3 플레이어를 실수로 고장 냈습니다. 친구에게 전화해 상황을 설명하고 해결책 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hey, I'm really sorry, but I broke your MP3 player.",
            "I accidentally dropped it, and now it won't turn on.",
            "Could I take it to a repair shop and pay for it?",
            "Or could I buy you a new one instead?",
            "What do you think?"
          ],
          "hint": "빌린 MP3 플레이어를 망가뜨려 미안하다고 말하기. → 실수로 떨어뜨린 뒤 전원이 켜지지 않는다고 설명하기. → 수리점에 가져가 수리비를 내도 되는지 첫 번째 대안 제시하기. → 아니면 새것을 사 줘도 되는지 두 번째 대안 제시하기. → 상대방의 생각을 물으며 마무리하기.",
          "questionEn": "You accidentally broke an MP3 player you borrowed from a friend. Call your friend, explain what happened, and offer two solutions.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "빌린 MP3 플레이어를 망가뜨려 미안하다고 말하기.",
            "실수로 떨어뜨린 뒤 전원이 켜지지 않는다고 설명하기.",
            "수리점에 가져가 수리비를 내도 되는지 첫 번째 대안 제시하기.",
            "아니면 새것을 사 줘도 되는지 두 번째 대안 제시하기.",
            "상대방의 생각을 물으며 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-mp3-rp3",
          "number": "MP3-RP3",
          "question": "전자기기가 작동하지 않았던 경험을 말해 주세요. 무엇을 하려던 중이었고, 어떻게 해결했나요?",
          "status": "필수",
          "answer": [
            "Well, I remember one problem I had with my phone.",
            "One day, I was taking a walk and listening to music.",
            "I accidentally dropped my phone, and it turned off.",
            "I tried to turn it on, but it didn't work.",
            "So I pressed the power button a few times, and luckily, it turned on again.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "휴대폰에 문제가 생긴 경험을 떠올린다고 말하기. → 산책하면서 음악을 듣고 있었다고 설명하기. → 휴대폰을 떨어뜨려 전원이 꺼졌다고 말하기. → 다시 켜려고 했지만 안 됐다고 설명하기. → 전원 버튼을 몇 번 누르자 다행히 켜졌다고 말하기. → 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a time an electronic device stopped working. What were you trying to do, and how did you solve the problem?",
          "type": "문제 경험",
          "hintSteps": [
            "휴대폰에 문제가 생긴 경험을 떠올린다고 말하기.",
            "산책하면서 음악을 듣고 있었다고 설명하기.",
            "휴대폰을 떨어뜨려 전원이 꺼졌다고 말하기.",
            "다시 켜려고 했지만 안 됐다고 설명하기.",
            "전원 버튼을 몇 번 누르자 다행히 켜졌다고 말하기.",
            "모든 일이 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-concert-rp1",
          "number": "CONCERT-RP1",
          "question": "콘서트 티켓 두 장을 사려고 합니다. 예매처에 전화해 공연과 티켓에 관한 질문 서너 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I want to buy two tickets for Saturday's concert.",
            "What time does it start?",
            "Do you have two seats together?",
            "How much is each ticket?",
            "Can I buy the tickets online?",
            "Thank you for your help."
          ],
          "hint": "토요일 콘서트 티켓 두 장을 사고 싶다고 말하기. → 공연 시작 시간 묻기. → 붙어 있는 좌석 두 개가 있는지 묻기. → 표 한 장의 가격 묻기. → 온라인으로 표를 살 수 있는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You want two tickets for a concert. Call the ticket office and ask three or four questions about the show and the tickets.",
          "type": "정보 문의",
          "hintSteps": [
            "토요일 콘서트 티켓 두 장을 사고 싶다고 말하기.",
            "공연 시작 시간 묻기.",
            "붙어 있는 좌석 두 개가 있는지 묻기.",
            "표 한 장의 가격 묻기.",
            "온라인으로 표를 살 수 있는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-concert-rp2",
          "number": "CONCERT-RP2",
          "question": "친구와 콘서트에 가기로 했지만 몸이 아파 갈 수 없습니다. 전화로 문제를 설명하고 대안 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hey, I'm really sorry, but I can't go to the concert.",
            "I'm not feeling well, so I need to stay home and rest.",
            "Could we change our tickets to another day?",
            "Or could you go with another friend instead?",
            "What do you think?"
          ],
          "hint": "몸이 좋지 않아 콘서트에 못 간다고 미안함을 전하기. → 집에서 쉬어야 한다고 이유 설명하기. → 티켓 날짜를 다른 날로 바꿀 수 있는지 제안하기. → 아니면 다른 친구와 대신 갈 수 있는지 제안하기. → 상대방의 생각을 묻고 마무리하기.",
          "questionEn": "You have concert plans with a friend, but you are too sick to go. Call your friend, explain the problem, and suggest two alternatives.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "몸이 좋지 않아 콘서트에 못 간다고 미안함을 전하기.",
            "집에서 쉬어야 한다고 이유 설명하기.",
            "티켓 날짜를 다른 날로 바꿀 수 있는지 제안하기.",
            "아니면 다른 친구와 대신 갈 수 있는지 제안하기.",
            "상대방의 생각을 묻고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-travel-rp1",
          "number": "TRAVEL-RP1",
          "question": "부산으로 기차 여행을 계획하고 있습니다. 역 안내 데스크에 전화해 티켓에 관한 질문 서너 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I want to go to Busan this Saturday.",
            "What time does the first train leave?",
            "Are there any seats left?",
            "How much is one ticket?",
            "Can I buy the ticket online?",
            "Thank you for your help."
          ],
          "hint": "이번 토요일에 부산에 가려고 한다고 용건 말하기. → 첫 기차가 몇 시에 출발하는지 묻기. → 남은 좌석이 있는지 묻기. → 표 한 장의 가격 묻기. → 온라인으로 표를 살 수 있는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You are planning a train trip to Busan. Call the station's information desk and ask three or four questions about tickets.",
          "type": "정보 문의",
          "hintSteps": [
            "이번 토요일에 부산에 가려고 한다고 용건 말하기.",
            "첫 기차가 몇 시에 출발하는지 묻기.",
            "남은 좌석이 있는지 묻기.",
            "표 한 장의 가격 묻기.",
            "온라인으로 표를 살 수 있는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-travel-rp2",
          "number": "TRAVEL-RP2",
          "question": "몸이 아파 친구와 계획한 여행을 갈 수 없습니다. 친구에게 전화해 대안 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hey, I'm really sorry, but I can't go to Busan this weekend.",
            "I'm not feeling well, so I need to stay home and rest.",
            "Could we go next weekend instead?",
            "Or could we cancel the trip and ask for a refund?",
            "What do you think?"
          ],
          "hint": "이번 주말에 부산에 갈 수 없다고 말하며 사과하기. → 몸이 좋지 않아 집에서 쉬어야 한다고 설명하기. → 첫 번째 대안으로 다음 주말에 가자고 제안하기. → 두 번째 대안으로 여행을 취소하고 환불을 요청하자고 제안하기. → 어떤 방법이 좋은지 친구에게 물으며 마무리하기.",
          "questionEn": "You cannot take a planned trip with your friend because you are sick. Call your friend and suggest two alternatives.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "이번 주말에 부산에 갈 수 없다고 말하며 사과하기.",
            "몸이 좋지 않아 집에서 쉬어야 한다고 설명하기.",
            "첫 번째 대안으로 다음 주말에 가자고 제안하기.",
            "두 번째 대안으로 여행을 취소하고 환불을 요청하자고 제안하기.",
            "어떤 방법이 좋은지 친구에게 물으며 마무리하기."
          ]
        },
        {
          "id": "topic-10-travel-rp3",
          "number": "TRAVEL-RP3",
          "question": "여행 계획을 바꾼 경험을 말해 주세요. 무엇 때문에 바꾸었고, 대신 어떻게 했나요?",
          "status": "필수",
          "answer": [
            "Well, I remember one time I had to change my trip to Busan.",
            "I wanted to visit Haeundae Beach, but it rained a lot.",
            "So I changed my train ticket to the next weekend.",
            "Luckily, the weather was nice the next weekend.",
            "I took a walk along the beach and listened to music.",
            "So yeah, I had a really relaxing trip."
          ],
          "hint": "부산 여행 계획을 바꾼 경험을 떠올린다고 말하기. → 해운대에 가려 했지만 비가 많이 왔다고 설명하기. → 기차표를 다음 주말로 변경했다고 말하기. → 다행히 다음 주말에는 날씨가 좋았다고 설명하기. → 해변을 걸으며 음악을 들었다고 말하기. → 정말 편안한 여행이었다고 마무리하기.",
          "questionEn": "Tell me about a time you changed your travel plans. What caused the change, and what did you do instead?",
          "type": "문제 경험",
          "hintSteps": [
            "부산 여행 계획을 바꾼 경험을 떠올린다고 말하기.",
            "해운대에 가려 했지만 비가 많이 왔다고 설명하기.",
            "기차표를 다음 주말로 변경했다고 말하기.",
            "다행히 다음 주말에는 날씨가 좋았다고 설명하기.",
            "해변을 걸으며 음악을 들었다고 말하기.",
            "정말 편안한 여행이었다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-house-rp1",
          "number": "HOUSE-RP1",
          "question": "임대 아파트를 찾고 있습니다. 부동산에 전화해 관심 있는 아파트에 관한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I'm calling about the apartment for rent.",
            "How much is the rent each month?",
            "How many bedrooms are there?",
            "Can I see the apartment this Saturday?",
            "Thank you for your help."
          ],
          "hint": "임대 아파트에 대해 문의하려고 전화했다고 말하기. → 한 달 월세가 얼마인지 묻기. → 침실이 몇 개인지 묻기. → 이번 토요일에 집을 볼 수 있는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You are looking for an apartment to rent. Call a real estate office and ask three questions about an apartment you are interested in.",
          "type": "정보 문의",
          "hintSteps": [
            "임대 아파트에 대해 문의하려고 전화했다고 말하기.",
            "한 달 월세가 얼마인지 묻기.",
            "침실이 몇 개인지 묻기.",
            "이번 토요일에 집을 볼 수 있는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-house-rp2",
          "number": "HOUSE-RP2",
          "question": "아파트 창문이 고장 나 닫히지 않습니다. 관리사무소에 전화해 문제를 설명하고 도움받을 방법 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hi, I'm calling about my apartment window.",
            "It won't close, so my room is really cold.",
            "Could someone come and fix it today?",
            "Or could someone come tomorrow morning instead?",
            "Please let me know which time is possible.",
            "Thanks for your help."
          ],
          "hint": "아파트 창문 때문에 전화했다고 말하기. → 창문이 닫히지 않아 방이 매우 춥다고 설명하기. → 오늘 누가 와서 고쳐 줄 수 있는지 물어보기. → 대신 내일 아침에 올 수 있는지 다른 대안 제시하기. → 가능한 시간을 알려 달라고 요청하기. → 도움에 감사하며 마무리하기.",
          "questionEn": "A window in your apartment is broken and will not close. Call the building office, explain the problem, and suggest two ways to get help.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "아파트 창문 때문에 전화했다고 말하기.",
            "창문이 닫히지 않아 방이 매우 춥다고 설명하기.",
            "오늘 누가 와서 고쳐 줄 수 있는지 물어보기.",
            "대신 내일 아침에 올 수 있는지 다른 대안 제시하기.",
            "가능한 시간을 알려 달라고 요청하기.",
            "도움에 감사하며 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-house-rp3",
          "number": "HOUSE-RP3",
          "question": "집에서 도움이 필요했던 문제를 말해 주세요. 누구에게 연락했고, 어떻게 해결했나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had at home.",
            "My kitchen light stopped working while I was making dinner.",
            "I was really surprised, so I called the building office.",
            "I told them about the problem.",
            "Someone came the next morning and fixed it.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "집에서 문제가 생겼던 경험이 기억난다고 시작하기. → 저녁을 만들던 중 주방 조명이 작동하지 않았다고 설명하기. → 놀라서 관리사무소에 전화했다고 말하기. → 관리사무소에 문제를 설명했다고 말하기. → 다음 날 아침 사람이 와서 고쳐 주었다고 결과 설명하기. → 결국 잘 해결되었다고 마무리하기.",
          "questionEn": "Tell me about a problem at home that required help. Who did you contact, and how was the problem fixed?",
          "type": "문제 경험",
          "hintSteps": [
            "집에서 문제가 생겼던 경험이 기억난다고 시작하기.",
            "저녁을 만들던 중 주방 조명이 작동하지 않았다고 설명하기.",
            "놀라서 관리사무소에 전화했다고 말하기.",
            "관리사무소에 문제를 설명했다고 말하기.",
            "다음 날 아침 사람이 와서 고쳐 주었다고 결과 설명하기.",
            "결국 잘 해결되었다고 마무리하기."
          ]
        },
        {
          "id": "topic-10-friend-rp1",
          "number": "FRIEND-RP1",
          "question": "친구가 집을 비우는 동안 식물에 물을 줘 달라고 합니다. 친구에게 전화해 준비에 필요한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hey, I can water your plants while you're away.",
            "How often should I water them?",
            "Where is the watering can?",
            "Where can I find the house key?",
            "Thanks, and enjoy your trip."
          ],
          "hint": "친구가 없는 동안 식물에 물을 줄 수 있다고 말하기. → 얼마나 자주 물을 줘야 하는지 묻기. → 물뿌리개가 어디에 있는지 묻기. → 집 열쇠를 어디에서 찾을 수 있는지 묻기. → 안내에 감사하고 여행 잘 다녀오라고 마무리하기.",
          "questionEn": "Your friend wants you to water some plants while they are away. Call your friend and ask three questions to get ready.",
          "type": "정보 문의",
          "hintSteps": [
            "친구가 없는 동안 식물에 물을 줄 수 있다고 말하기.",
            "얼마나 자주 물을 줘야 하는지 묻기.",
            "물뿌리개가 어디에 있는지 묻기.",
            "집 열쇠를 어디에서 찾을 수 있는지 묻기.",
            "안내에 감사하고 여행 잘 다녀오라고 마무리하기."
          ]
        },
        {
          "id": "topic-10-friend-rp2",
          "number": "FRIEND-RP2",
          "question": "친구의 식물에 물을 주러 갔지만 집 열쇠가 맞지 않습니다. 친구에게 전화해 문제를 설명하고 해결책 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hey, I'm at your house, but I can't get in.",
            "I tried the key, but it doesn't work.",
            "Is there another key I can use?",
            "Or could someone come and open the door?",
            "I can wait here for a while.",
            "Let me know what works for you."
          ],
          "hint": "친구집에 도착했지만 들어갈 수 없다고 말하기. → 열쇠를 써 봤지만 맞지 않는다고 설명하기. → 첫 번째 해결책으로 쓸 수 있는 다른 열쇠가 있는지 묻기. → 두 번째 해결책으로 누군가 와서 문을 열어 줄 수 있는지 묻기. → 여기서 잠시 기다릴 수 있다고 말하기. → 친구에게 가능한 방법을 알려 달라고 하며 마무리하기.",
          "questionEn": "You went to water your friend's plants, but the house key does not work. Call your friend, explain the problem, and suggest two solutions.",
          "type": "문제 해결 역할극",
          "hintSteps": [
            "친구집에 도착했지만 들어갈 수 없다고 말하기.",
            "열쇠를 써 봤지만 맞지 않는다고 설명하기.",
            "첫 번째 해결책으로 쓸 수 있는 다른 열쇠가 있는지 묻기.",
            "두 번째 해결책으로 누군가 와서 문을 열어 줄 수 있는지 묻기.",
            "여기서 잠시 기다릴 수 있다고 말하기.",
            "친구에게 가능한 방법을 알려 달라고 하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-friend-rp3",
          "number": "FRIEND-RP3",
          "question": "친구의 부탁을 들어주다가 문제가 생긴 경험을 말해 주세요. 무슨 일이 있었고, 어떻게 대처했나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had while helping a friend.",
            "I went to water his plants, but the house key didn't work.",
            "So I called my friend and told him about the problem.",
            "He told me where to find another key.",
            "I found it, opened the door, and watered the plants.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "친구를 도와주다가 문제가 생긴 경험이 기억난다고 시작하기. → 친구의 식물에 물을 주러 갔지만 집 열쇠가 맞지 않았다고 설명하기. → 친구에게 전화해 문제를 말했다고 설명하기. → 친구가 다른 열쇠의 위치를 알려 주었다고 말하기. → 열쇠를 찾아 문을 열고 식물에 물을 주었다고 결과 말하기. → 결국 잘 해결되었다고 마무리하기.",
          "questionEn": "Tell me about a problem you had while doing a favor for a friend. What happened, and how did you handle it?",
          "type": "문제 경험",
          "hintSteps": [
            "친구를 도와주다가 문제가 생긴 경험이 기억난다고 시작하기.",
            "친구의 식물에 물을 주러 갔지만 집 열쇠가 맞지 않았다고 설명하기.",
            "친구에게 전화해 문제를 말했다고 설명하기.",
            "친구가 다른 열쇠의 위치를 알려 주었다고 말하기.",
            "열쇠를 찾아 문을 열고 식물에 물을 주었다고 결과 말하기.",
            "결국 잘 해결되었다고 마무리하기."
          ]
        },
        {
          "id": "topic-10-service-rp1",
          "number": "SERVICE-RP1",
          "question": "머리를 자르려고 예약하려 합니다. 미용실에 전화해 예약과 서비스에 관한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I'd like to book a haircut this Saturday.",
            "Do you have any times available in the afternoon?",
            "How much is a haircut?",
            "How long does it take?",
            "Thank you for your help."
          ],
          "hint": "이번 토요일에 머리 자르는 예약을 하고 싶다고 말하기. → 오후에 예약 가능한 시간이 있는지 묻기. → 머리 자르는 비용 묻기. → 얼마나 오래 걸리는지 묻기. → 안내에 감사하며 마무리하기.",
          "variants": [
            {
              "label": "치과 질문일 때",
              "replacements": [
                {
                  "from": "Hi, I'd like to book a haircut this Saturday.",
                  "to": "Hi, I'd like to book a dental checkup this Saturday."
                },
                {
                  "from": "How much is a haircut?",
                  "to": "How much is a dental checkup?"
                }
              ],
              "questionEn": "You want to book a dental checkup. Call the dental clinic and ask three questions about an appointment and the service.",
              "question": "치과 검진을 예약하려 합니다. 치과에 전화해 예약과 서비스에 관한 질문 세 가지를 해보세요."
            }
          ],
          "questionEn": "You want to book a haircut. Call the salon and ask three questions about an appointment and the service.",
          "type": "정보 문의",
          "hintSteps": [
            "이번 토요일에 머리 자르는 예약을 하고 싶다고 말하기.",
            "오후에 예약 가능한 시간이 있는지 묻기.",
            "머리 자르는 비용 묻기.",
            "얼마나 오래 걸리는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-service-rp2",
          "number": "SERVICE-RP2",
          "question": "몸이 아파 오늘 미용실 예약에 갈 수 없습니다. 전화해 상황을 설명하고 새로운 예약 시간 두 가지를 제안해 보세요.",
          "status": "필수",
          "answer": [
            "Hi, I'm really sorry, but I can't come to my appointment today.",
            "I'm not feeling well, so I need to stay home and rest.",
            "Could I come on Saturday afternoon instead?",
            "Or could I come on Monday morning?",
            "Which time is available?"
          ],
          "hint": "오늘 예약에 갈 수 없다고 말하며 사과하기. → 몸이 좋지 않아 집에서 쉬어야 한다고 설명하기. → 첫 번째 새 예약 시간으로 토요일 오후를 제안하기. → 두 번째 새 예약 시간으로 월요일 오전을 제안하기. → 두 시간 중 어느 때 예약이 가능한지 물으며 마무리하기.",
          "questionEn": "You are sick and cannot attend your salon appointment today. Call the salon, explain the situation, and suggest two new appointment times.",
          "type": "문제 해결 역할극",
          "variants": [
            {
              "label": "치과 질문일 때",
              "questionEn": "You are sick and cannot attend your dental appointment today. Call the dental clinic, explain the situation, and suggest two new appointment times.",
              "question": "몸이 아파 오늘 치과 예약에 갈 수 없습니다. 치과에 전화해 상황을 설명하고 새로운 예약 시간 두 가지를 제안해 보세요.",
              "replacements": []
            }
          ],
          "hintSteps": [
            "오늘 예약에 갈 수 없다고 말하며 사과하기.",
            "몸이 좋지 않아 집에서 쉬어야 한다고 설명하기.",
            "첫 번째 새 예약 시간으로 토요일 오후를 제안하기.",
            "두 번째 새 예약 시간으로 월요일 오전을 제안하기.",
            "두 시간 중 어느 때 예약이 가능한지 물으며 마무리하기."
          ]
        },
        {
          "id": "topic-10-restaurant-rp1",
          "number": "RESTAURANT-RP1",
          "question": "친구와 음식점에 가려고 합니다. 전화해 마감 시간·식사 가격·예약·주차에 관해 물어보세요.",
          "status": "필수",
          "answer": [
            "Hi, I want to visit your restaurant with a friend.",
            "What time do you close?",
            "How much is a meal?",
            "Do I need to book a table?",
            "Is there a parking area?",
            "Thank you for your help."
          ],
          "hint": "친구와 음식점에 방문하고 싶다고 말하기. → 마감 시간 묻기. → 식사 가격 묻기. → 테이블을 예약해야 하는지 묻기. → 주차장이 있는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You want to visit a restaurant with a friend. Call and ask about closing time, meal prices, reservations, and parking.",
          "type": "정보 문의",
          "hintSteps": [
            "친구와 음식점에 방문하고 싶다고 말하기.",
            "마감 시간 묻기.",
            "식사 가격 묻기.",
            "테이블을 예약해야 하는지 묻기.",
            "주차장이 있는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-hotel-rp1",
          "number": "HOTEL-RP1",
          "question": "호텔에 머무르려고 합니다. 호텔에 전화해 객실 예약에 필요한 질문 서너 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I'd like to book a room this Saturday.",
            "Do you have a room with an ocean view?",
            "How much is one night?",
            "Is breakfast included?",
            "Can I book the room online?",
            "Thank you for your help."
          ],
          "hint": "이번 토요일에 객실을 예약하고 싶다고 말하기. → 바다가 보이는 방이 있는지 묻기. → 1박 가격 묻기. → 조식이 포함되어 있는지 묻기. → 온라인으로 방을 예약할 수 있는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You are planning a hotel stay. Call the hotel and ask three or four questions to help you book a room.",
          "type": "정보 문의",
          "hintSteps": [
            "이번 토요일에 객실을 예약하고 싶다고 말하기.",
            "바다가 보이는 방이 있는지 묻기.",
            "1박 가격 묻기.",
            "조식이 포함되어 있는지 묻기.",
            "온라인으로 방을 예약할 수 있는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-recycling-rp1",
          "number": "RECYCLING-RP1",
          "question": "아파트로 이사해서 재활용 정보를 알아야 합니다. 관리사무소에 전화해 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, I just moved into this building.",
            "Where is the recycling area?",
            "What days can I use it?",
            "Should I separate plastic and paper?",
            "Thank you for your help."
          ],
          "hint": "이 건물에 막 이사 왔다고 말하기. → 재활용장이 어디에 있는지 묻기. → 어떤 요일에 이용할 수 있는지 묻기. → 플라스틱과 종이를 따로 분리해야 하는지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "You have moved into an apartment and need information about recycling. Call the building office and ask three questions.",
          "type": "정보 문의",
          "hintSteps": [
            "이 건물에 막 이사 왔다고 말하기.",
            "재활용장이 어디에 있는지 묻기.",
            "어떤 요일에 이용할 수 있는지 묻기.",
            "플라스틱과 종이를 따로 분리해야 하는지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-repair-rp1",
          "number": "REPAIR-RP1",
          "question": "휴대폰이 작동하지 않습니다. 수리점에 전화해 점검받는 데 필요한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hi, my phone isn't working, and I want to get it checked.",
            "Can I bring it in this afternoon?",
            "How long does it take to check it?",
            "How much does the check cost?",
            "Thank you for your help."
          ],
          "hint": "휴대폰이 작동하지 않아 점검받고 싶다고 말하기. → 오늘 오후에 가져가도 되는지 묻기. → 점검하는 데 얼마나 걸리는지 묻기. → 점검 비용이 얼마인지 묻기. → 안내에 감사하며 마무리하기.",
          "questionEn": "Your phone has stopped working. Call a repair shop and ask three questions about having it checked.",
          "type": "정보 문의",
          "hintSteps": [
            "휴대폰이 작동하지 않아 점검받고 싶다고 말하기.",
            "오늘 오후에 가져가도 되는지 묻기.",
            "점검하는 데 얼마나 걸리는지 묻기.",
            "점검 비용이 얼마인지 묻기.",
            "안내에 감사하며 마무리하기."
          ]
        },
        {
          "id": "topic-10-party-rp1",
          "number": "PARTY-RP1",
          "question": "친구가 파티에 초대했습니다. 친구에게 전화해 파티 계획에 관한 질문 세 가지를 해보세요.",
          "status": "필수",
          "answer": [
            "Hey, thanks for inviting me to your party.",
            "What time does it start?",
            "Where is the party?",
            "Should I bring any food or drinks?",
            "Thanks, and see you there."
          ],
          "hint": "파티에 초대해 줘서 고맙다고 말하기. → 파티가 몇 시에 시작하는지 묻기. → 파티 장소 묻기. → 음식이나 음료를 가져가야 하는지 묻기. → 고맙다고 말하고 파티에서 보자고 마무리하기.",
          "questionEn": "A friend has invited you to a party. Call your friend and ask three questions about the plans.",
          "type": "정보 문의",
          "hintSteps": [
            "파티에 초대해 줘서 고맙다고 말하기.",
            "파티가 몇 시에 시작하는지 묻기.",
            "파티 장소 묻기.",
            "음식이나 음료를 가져가야 하는지 묻기.",
            "고맙다고 말하고 파티에서 보자고 마무리하기."
          ]
        },
        {
          "id": "topic-10-celebrity-rp1",
          "number": "CELEBRITY-RP1",
          "question": "좋아하는 유명인과 이야기할 기회가 생겼다고 상상해 보세요. 팬이라고 소개하고 활동에 관한 질문 세 가지를 해보세요.",
          "status": "선택",
          "answer": [
            "Hi, I'm a big fan of your music.",
            "I really like your songs.",
            "When did you start singing?",
            "What's your favorite song to sing?",
            "Are you working on a new song?",
            "Thank you for your time."
          ],
          "hint": "상대방의 음악을 좋아하는 팬이라고 소개하기. → 상대방의 노래를 정말 좋아한다고 말하기. → 언제 노래를 시작했는지 묻기. → 부르기 가장 좋아하는 노래가 무엇인지 묻기. → 새 노래를 준비하고 있는지 묻기. → 시간을 내줘서 고맙다고 마무리하기.",
          "questionEn": "Imagine you have a chance to speak with a celebrity you like. Introduce yourself as a fan and ask three questions about their work.",
          "type": "정보 문의",
          "hintSteps": [
            "상대방의 음악을 좋아하는 팬이라고 소개하기.",
            "상대방의 노래를 정말 좋아한다고 말하기.",
            "언제 노래를 시작했는지 묻기.",
            "부르기 가장 좋아하는 노래가 무엇인지 묻기.",
            "새 노래를 준비하고 있는지 묻기.",
            "시간을 내줘서 고맙다고 마무리하기."
          ]
        },
        {
          "id": "topic-10-relative-rp1",
          "number": "RELATIVE-RP1",
          "type": "정보 문의",
          "questionEn": "Your relative will be away on vacation, and you have offered to look after their home. Phone your relative before they leave and ask three or four questions to find out what you need to do.",
          "question": "친척이 휴가를 가는 동안 집을 봐주기로 했습니다. 친척이 떠나기 전에 전화해서 해야 할 일을 알아보기 위한 질문 서너 가지를 해보세요.",
          "hintSteps": [
            "친척이 없는 동안 집을 봐줄 수 있다고 말하기.",
            "얼마나 자주 방문해야 하는지 묻기.",
            "집에서 어떤 일을 해야 하는지 묻기.",
            "집 열쇠를 어디에서 찾을 수 있는지 묻기.",
            "안내에 감사하고 여행 잘 다녀오라고 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "Hi, I can look after your house while you're away.",
            "How often should I visit?",
            "What should I do at your house?",
            "Where can I find the house key?",
            "Thanks, and enjoy your trip."
          ],
          "hint": "친척이 없는 동안 집을 봐줄 수 있다고 말하기. → 얼마나 자주 방문해야 하는지 묻기. → 집에서 어떤 일을 해야 하는지 묻기. → 집 열쇠를 어디에서 찾을 수 있는지 묻기. → 안내에 감사하고 여행 잘 다녀오라고 마무리하기."
        },
        {
          "id": "topic-10-relative-rp2",
          "number": "RELATIVE-RP2",
          "type": "문제 해결 역할극",
          "questionEn": "At your relative's home, you find the door locked and cannot locate the key. Phone the front desk of the hotel where your relative is staying. Leave a message describing your difficulty and asking your relative to contact you with instructions.",
          "question": "친척집에 도착했는데 문이 잠겨 있고 열쇠를 찾을 수 없습니다. 친척이 머무는 호텔의 프런트에 전화하세요. 집에 들어갈 수 없는 상황을 설명하고, 어떻게 해야 하는지 알려 달라며 친척에게 연락을 요청하는 메시지를 남겨 보세요.",
          "hintSteps": [
            "이모가 호텔에 투숙 중이라고 말하기.",
            "이모에게 메시지를 전해 줄 수 있는지 물어보기.",
            "집 열쇠를 찾지 못해 들어갈 수 없다고 설명하기.",
            "열쇠가 어디 있는지 전화로 알려 달라고 요청하기.",
            "이름을 알려 주고 이모가 내 전화번호를 알고 있다고 말하기.",
            "감사 인사로 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "Hi, my aunt is staying at your hotel.",
            "Could you give her a message?",
            "I'm at her house, but I can't get in because I can't find the key.",
            "Please ask her to call me and tell me where the key is.",
            "My name is Han, and she has my phone number.",
            "Thank you for your help."
          ],
          "hint": "이모가 호텔에 투숙 중이라고 말하기. → 이모에게 메시지를 전해 줄 수 있는지 물어보기. → 집 열쇠를 찾지 못해 들어갈 수 없다고 설명하기. → 열쇠가 어디 있는지 전화로 알려 달라고 요청하기. → 이름을 알려 주고 이모가 내 전화번호를 알고 있다고 말하기. → 감사 인사로 마무리하기.",
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-relative-rp3",
          "number": "RELATIVE-RP3",
          "type": "문제 경험",
          "questionEn": "Describe an occasion when you were unable to keep a promise or follow through on plans with a family member or friend. Explain what prevented you, how you let them know, and what happened afterward.",
          "question": "가족이나 친구에게 한 약속을 지키지 못했던 경험을 말해 주세요. 무엇 때문에 약속을 지키지 못했는지, 상대에게 어떻게 알렸는지, 그 후 어떻게 되었는지 설명해 주세요.",
          "hintSteps": [
            "친구와 만나기로 한 약속을 지키지 못했던 경험이 기억난다고 시작하기.",
            "카페에서 만나기로 했지만 몸이 아팠다고 설명하기.",
            "친구에게 전화해 사과했다고 말하기.",
            "다음 주말에 만날 수 있는지 물었다고 말하기.",
            "친구가 괜찮다고 했고 일주일 뒤에 만났다고 결과 설명하기.",
            "결국 잘 해결되었다고 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "I remember one time I couldn't meet a friend.",
            "We planned to meet at a cafe, but I was sick.",
            "So I called my friend and said sorry.",
            "I asked if we could meet the next weekend.",
            "My friend said okay, and we met a week later.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "친구와 만나기로 한 약속을 지키지 못했던 경험이 기억난다고 시작하기. → 카페에서 만나기로 했지만 몸이 아팠다고 설명하기. → 친구에게 전화해 사과했다고 말하기. → 다음 주말에 만날 수 있는지 물었다고 말하기. → 친구가 괜찮다고 했고 일주일 뒤에 만났다고 결과 설명하기. → 결국 잘 해결되었다고 마무리하기."
        },
        {
          "id": "topic-10-phone-buy-rp1",
          "number": "PHONE-BUY-RP1",
          "type": "정보 문의",
          "questionEn": "You are considering buying a new mobile phone. Phone a mobile phone store and ask three or four questions that would help you choose a phone and decide whether to buy it.",
          "question": "새 휴대전화 구매를 생각하고 있습니다. 휴대전화 매장에 전화해서 제품을 고르고 구매 여부를 결정하는 데 도움이 되는 질문 서너 가지를 해보세요.",
          "hintSteps": [
            "새 휴대전화를 사고 싶다고 용건 말하기.",
            "어떤 모델을 추천하는지 묻기.",
            "가격이 얼마인지 묻기.",
            "카메라 성능이 좋은지 묻기.",
            "안내에 감사하며 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "Hi, I want to buy a new phone.",
            "Which model do you recommend?",
            "How much is it?",
            "Does it have a good camera?",
            "Thank you for your help."
          ],
          "hint": "새 휴대전화를 사고 싶다고 용건 말하기. → 어떤 모델을 추천하는지 묻기. → 가격이 얼마인지 묻기. → 카메라 성능이 좋은지 묻기. → 안내에 감사하며 마무리하기."
        },
        {
          "id": "topic-10-phone-buy-rp2",
          "number": "PHONE-BUY-RP2",
          "type": "문제 해결 역할극",
          "questionEn": "After trying the mobile phone you recently bought, you realize it does not suit you. Phone the store, explain what you are unhappy with, and request an exchange for a different model. Ask how to arrange the exchange.",
          "question": "최근 구입한 휴대전화를 사용해 보니 마음에 들지 않습니다. 매장에 전화해서 어떤 점이 마음에 들지 않는지 설명하고 다른 모델로 교환해 달라고 요청하세요. 교환을 어떻게 진행하면 되는지도 물어보세요.",
          "hintSteps": [
            "어제 이 매장에서 휴대전화를 샀다고 말하기.",
            "사용해 보니 너무 커서 마음에 들지 않는다고 설명하기.",
            "더 작은 휴대전화로 교환할 수 있는지 묻기.",
            "교환할 때 무엇을 가져가야 하는지 묻기.",
            "오늘 오후에 방문해도 되는지 묻기.",
            "도움에 감사하며 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "Hi, I bought a phone from your store yesterday.",
            "I tried it, but it's too big for me.",
            "Can I exchange it for a smaller one?",
            "What should I bring?",
            "Can I come in this afternoon?",
            "Thanks for your help."
          ],
          "hint": "어제 이 매장에서 휴대전화를 샀다고 말하기. → 사용해 보니 너무 커서 마음에 들지 않는다고 설명하기. → 더 작은 휴대전화로 교환할 수 있는지 묻기. → 교환할 때 무엇을 가져가야 하는지 묻기. → 오늘 오후에 방문해도 되는지 묻기. → 도움에 감사하며 마무리하기."
        },
        {
          "id": "topic-10-phone-buy-rp3",
          "number": "PHONE-BUY-RP3",
          "type": "문제 경험",
          "questionEn": "Recall a time when a new product you bought did not meet your expectations. Describe the product, why you were disappointed, and what you did about it. How did things turn out?",
          "question": "새로 구입한 제품이 기대에 미치지 못했던 경험을 말해 주세요. 어떤 제품이었는지, 왜 실망했는지, 어떻게 대처했는지 설명해 주세요. 결과는 어땠나요?",
          "hintSteps": [
            "새 휴대폰을 구매한 뒤 생긴 문제를 떠올린다고 말하기.",
            "카메라가 마음에 들어 샀다고 설명하기.",
            "그런데 휴대폰이 나에게 너무 컸다고 말하기.",
            "가게에 전화해 문제를 이야기했다고 설명하기.",
            "더 작은 휴대폰으로 교환해 줘서 만족했다고 말하기.",
            "결국 잘 해결됐다고 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "I remember one problem I had with a new phone.",
            "I bought it because I liked the camera.",
            "But the phone was too big for me.",
            "So I called the store and told them about the problem.",
            "They exchanged it for a smaller phone, and I was happy.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "새 휴대폰을 구매한 뒤 생긴 문제를 떠올린다고 말하기. → 카메라가 마음에 들어 샀다고 설명하기. → 그런데 휴대폰이 나에게 너무 컸다고 말하기. → 가게에 전화해 문제를 이야기했다고 설명하기. → 더 작은 휴대폰으로 교환해 줘서 만족했다고 말하기. → 결국 잘 해결됐다고 마무리하기.",
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-10-pub-rp1",
          "number": "PUB-RP1",
          "type": "정보 문의",
          "questionEn": "You are interested in a bar that recently opened. A friend has already visited it. Phone your friend and ask three or four questions to help you plan your own visit.",
          "question": "최근 문을 연 술집에 가보고 싶습니다. 그곳에 이미 가본 친구에게 전화해서 방문을 계획하는 데 도움이 되는 질문 서너 가지를 해보세요.",
          "hintSteps": [
            "친구가 새로 생긴 펍에 다녀왔다고 들었다며 시작하기.",
            "펍이 어디 있는지 묻기.",
            "보통 조용한 곳인지 묻기.",
            "맛있는 음식이 있는지 묻기.",
            "몇 시에 문을 닫는지 묻기.",
            "정보를 알려 준 친구에게 감사하며 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "Hey, I heard you went to the new pub.",
            "Where is it?",
            "Is it usually quiet?",
            "Do they have good food?",
            "What time does it close?",
            "Thanks for your help."
          ],
          "hint": "친구가 새로 생긴 펍에 다녀왔다고 들었다며 시작하기. → 펍이 어디 있는지 묻기. → 보통 조용한 곳인지 묻기. → 맛있는 음식이 있는지 묻기. → 몇 시에 문을 닫는지 묻기. → 정보를 알려 준 친구에게 감사하며 마무리하기."
        },
        {
          "id": "topic-10-pub-rp2",
          "number": "PUB-RP2",
          "type": "문제 해결 역할극",
          "questionEn": "You arranged to meet a friend at the new bar, but you are feeling too ill to go. Phone your friend to explain, apologize for the change, and suggest two other plans.",
          "question": "새 술집에서 친구를 만나기로 했지만 몸이 아파 갈 수 없습니다. 친구에게 전화해서 상황을 설명하고 약속을 바꾸게 된 것에 대해 사과한 뒤, 다른 계획 두 가지를 제안해 보세요.",
          "hintSteps": [
            "오늘 펍에 갈 수 없다고 말하며 사과하기.",
            "몸이 좋지 않아 집에서 쉬어야 한다고 설명하기.",
            "첫 번째 대안으로 다음 주말에 함께 가자고 제안하기.",
            "두 번째 대안으로 오늘은 다른 친구와 가는 것이 어떤지 제안하기.",
            "어떤 방법이 좋은지 친구에게 물으며 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "Hey, I'm really sorry, but I can't go to the pub today.",
            "I'm not feeling well, so I need to stay home and rest.",
            "Could we go next weekend instead?",
            "Or could you go with another friend today?",
            "What do you think?"
          ],
          "hint": "오늘 펍에 갈 수 없다고 말하며 사과하기. → 몸이 좋지 않아 집에서 쉬어야 한다고 설명하기. → 첫 번째 대안으로 다음 주말에 함께 가자고 제안하기. → 두 번째 대안으로 오늘은 다른 친구와 가는 것이 어떤지 제안하기. → 어떤 방법이 좋은지 친구에게 물으며 마무리하기."
        },
        {
          "id": "topic-10-pub-rp3",
          "number": "PUB-RP3",
          "type": "과거 경험",
          "questionEn": "Share a memorable experience you had at a bar or pub. Describe when it happened, who was with you, and what took place. What made the occasion stand out?",
          "question": "술집이나 펍에서 있었던 기억에 남는 경험을 말해 주세요. 언제였는지, 누구와 함께 있었는지, 무슨 일이 있었는지 설명해 주세요. 어떤 점 때문에 기억에 남나요?",
          "hintSteps": [
            "펍에서 있었던 특별한 날을 떠올린다고 말하기.",
            "내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기.",
            "도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 줬다고 설명하기.",
            "정말 놀라서 거의 울 뻔했다고 말하기.",
            "친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기."
          ],
          "status": "필수",
          "answer": [
            "I remember one special day at a pub.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "펍에서 있었던 특별한 날을 떠올린다고 말하기. → 내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기. → 도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 줬다고 설명하기. → 정말 놀라서 거의 울 뻔했다고 말하기. → 친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기.",
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "roleplaySections": [
        {
          "id": "roleplay-ask",
          "title": "상대에게 질문하는 롤플레이",
          "description": "정보를 묻거나 문제를 설명하고 해결 방법을 제안하는 통화입니다.",
          "sets": [
            {
              "id": "roleplay-ask-1",
              "title": "친구에게 일정 묻기",
              "questionIds": [
                "topic-10-rp1",
                "topic-10-friend-rp1",
                "topic-10-party-rp1"
              ]
            },
            {
              "id": "roleplay-ask-2",
              "title": "공연·여행 예약 문의",
              "questionIds": [
                "topic-10-concert-rp1",
                "topic-10-travel-rp1",
                "topic-10-hotel-rp1"
              ]
            },
            {
              "id": "roleplay-ask-3",
              "title": "집·시설 정보 문의",
              "questionIds": [
                "topic-10-house-rp1",
                "topic-10-recycling-rp1",
                "topic-10-rp2"
              ]
            },
            {
              "id": "roleplay-ask-4",
              "title": "물건·서비스 정보 문의",
              "questionIds": [
                "topic-10-mp3-rp1",
                "topic-10-repair-rp1",
                "topic-10-service-rp1"
              ]
            },
            {
              "id": "roleplay-ask-5",
              "title": "그 밖의 정보 문의",
              "questionIds": [
                "topic-10-restaurant-rp1",
                "topic-10-celebrity-rp1"
              ]
            },
            {
              "id": "roleplay-ask-6",
              "title": "일정 변경 제안",
              "questionIds": [
                "topic-10-rp3",
                "topic-10-concert-rp2",
                "topic-10-travel-rp2"
              ]
            },
            {
              "id": "roleplay-ask-7",
              "title": "물건·집 문제 해결",
              "questionIds": [
                "topic-10-rp4",
                "topic-10-mp3-rp2",
                "topic-10-house-rp2"
              ]
            },
            {
              "id": "roleplay-ask-8",
              "title": "친구·예약 문제 해결",
              "questionIds": [
                "topic-10-friend-rp2",
                "topic-10-service-rp2"
              ]
            }
          ]
        },
        {
          "id": "roleplay-answer",
          "title": "질문에 답하는 경험형",
          "description": "전화로 질문을 만드는 대신, 실제로 겪은 일과 대처·결과를 말합니다.",
          "sets": [
            {
              "id": "roleplay-answer-1",
              "title": "친구·여행 경험",
              "questionIds": [
                "topic-10-rp5",
                "topic-10-travel-rp3",
                "topic-10-friend-rp3"
              ]
            },
            {
              "id": "roleplay-answer-2",
              "title": "기기·집 문제 경험",
              "questionIds": [
                "topic-10-mp3-rp3",
                "topic-10-house-rp3"
              ]
            }
          ]
        }
      ],
      "roleplayScenarios": [
        [
          "친구와 약속",
          "rp1",
          "rp3",
          "rp5"
        ],
        [
          "전자기기 구매·고장",
          "mp3-rp1",
          "mp3-rp2",
          "mp3-rp3"
        ],
        [
          "콘서트 예매·문제",
          "concert-rp1",
          [
            "concert-rp2",
            "rp4"
          ],
          null
        ],
        [
          "기차 여행",
          "travel-rp1",
          "travel-rp2",
          "travel-rp3"
        ],
        [
          "집 구하기·집 문제",
          "house-rp1",
          "house-rp2",
          "house-rp3"
        ],
        [
          "친구의 부탁·식물 돌보기",
          "friend-rp1",
          "friend-rp2",
          "friend-rp3"
        ],
        [
          "미용실 예약",
          "service-rp1",
          "service-rp2",
          null
        ],
        [
          "음식점 문의",
          "restaurant-rp1",
          null,
          null
        ],
        [
          "호텔 예약",
          "hotel-rp1",
          null,
          null
        ],
        [
          "재활용 문의",
          "recycling-rp1",
          null,
          null
        ],
        [
          "휴대폰 수리 문의",
          "repair-rp1",
          null,
          null
        ],
        [
          "파티 초대",
          "party-rp1",
          null,
          null
        ],
        [
          "박물관 방문",
          "rp2",
          null,
          null
        ],
        [
          "유명인에게 질문",
          "celebrity-rp1",
          null,
          null
        ],
        [
          "친척집 돌보기·약속 경험",
          "relative-rp1",
          "relative-rp2",
          "relative-rp3"
        ],
        [
          "새 휴대전화 구매·교환",
          "phone-buy-rp1",
          "phone-buy-rp2",
          "phone-buy-rp3"
        ],
        [
          "새 술집 방문·약속 변경",
          "pub-rp1",
          "pub-rp2",
          "pub-rp3"
        ]
      ]
    },
    {
      "id": "topic-11",
      "order": 11,
      "title": "호텔",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-11-q1",
          "number": "Q1",
          "question": "한국의 일반적인 호텔을 묘사해 주세요. 어디에 있으며, 객실과 시설은 어떤가요?",
          "status": "필수",
          "answer": [
            "Hotels in Korea are usually near stations or popular places.",
            "There is a lobby and a front desk near the entrance.",
            "A room usually has a bed, a desk, and a bathroom.",
            "Some hotels also have a restaurant and a gym.",
            "The rooms are usually clean and comfortable.",
            "So yeah, those are typical hotels in Korea."
          ],
          "hint": "한국 호텔은 보통 역이나 인기 있는 장소 근처에 있다고 말하기. → 입구 근처에 로비와 프런트가 있다고 설명하기. → 객실에는 침대, 책상, 욕실이 있다고 묘사하기. → 일부 호텔에는 음식점과 헬스장도 있다고 덧붙이기. → 객실은 보통 깨끗하고 편안하다고 말하기. → 이것이 한국의 일반적인 호텔 모습이라고 마무리하기.",
          "questionEn": "Describe typical hotels in Korea. Where are they located, and what are the rooms and facilities like?",
          "type": "묘사",
          "hintSteps": [
            "한국 호텔은 보통 역이나 인기 있는 장소 근처에 있다고 말하기.",
            "입구 근처에 로비와 프런트가 있다고 설명하기.",
            "객실에는 침대, 책상, 욕실이 있다고 묘사하기.",
            "일부 호텔에는 음식점과 헬스장도 있다고 덧붙이기.",
            "객실은 보통 깨끗하고 편안하다고 말하기.",
            "이것이 한국의 일반적인 호텔 모습이라고 마무리하기."
          ]
        },
        {
          "id": "topic-11-q2",
          "number": "Q2",
          "question": "호텔에 도착하면 보통 무엇을 하나요? 체크인 과정과 그다음 하는 일을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I arrive at a hotel, I go to the front desk first.",
            "I tell the staff my name and show my ID.",
            "Then, I get my room key and go to my room.",
            "I put my luggage down and check the room.",
            "After that, I sit on the bed and relax for a while.",
            "So yeah, that's what I usually do when I check in."
          ],
          "hint": "호텔에 도착하면 먼저 프런트에 간다고 말하기. → 직원에게 이름과 신분증을 보여 준다고 설명하기. → 객실 열쇠를 받고 방으로 간다고 말하기. → 짐을 내려놓고 방을 확인한다고 설명하기. → 침대에 앉아 잠시 쉰다고 말하기. → 체크인할 때 하는 일을 마무리하기.",
          "questionEn": "What do you usually do when you arrive at a hotel? Explain the check-in process and what you do next.",
          "type": "일과·절차",
          "hintSteps": [
            "호텔에 도착하면 먼저 프런트에 간다고 말하기.",
            "직원에게 이름과 신분증을 보여 준다고 설명하기.",
            "객실 열쇠를 받고 방으로 간다고 말하기.",
            "짐을 내려놓고 방을 확인한다고 설명하기.",
            "침대에 앉아 잠시 쉰다고 말하기.",
            "체크인할 때 하는 일을 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-11-q3",
          "number": "Q3",
          "question": "가장 최근 호텔에 묵었던 경험을 말해 주세요. 체크인부터 체크아웃까지 무엇을 했는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "The last time I stayed at a hotel was about three years ago.",
            "It was near Haeundae Beach in Busan.",
            "First, I checked in and put my bag in my room.",
            "Then, I went to the beach and took a short walk.",
            "The next morning, I packed my bag and checked out.",
            "So yeah, it was a really relaxing trip."
          ],
          "hint": "마지막 호텔 숙박은 약 3년 전이었다고 말하기. → 호텔은 부산 해운대 근처에 있었다고 설명하기. → 먼저 체크인하고 객실에 가방을 두었다고 말하기. → 해변에 가서 짧게 산책했다고 설명하기. → 다음 날 아침 짐을 챙기고 체크아웃했다고 말하기. → 편안한 여행이었다고 마무리하기.",
          "questionEn": "Tell me about your most recent hotel stay. Explain what you did from checking in to checking out.",
          "type": "과거 경험",
          "hintSteps": [
            "마지막 호텔 숙박은 약 3년 전이었다고 말하기.",
            "호텔은 부산 해운대 근처에 있었다고 설명하기.",
            "먼저 체크인하고 객실에 가방을 두었다고 말하기.",
            "해변에 가서 짧게 산책했다고 설명하기.",
            "다음 날 아침 짐을 챙기고 체크아웃했다고 말하기.",
            "편안한 여행이었다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-11-q4",
          "number": "Q4",
          "question": "기억에 남는 호텔 숙박 경험을 말해 주세요. 머무는 동안 무엇을 했고, 왜 기억에 남나요?",
          "status": "필수",
          "answer": [
            "I remember one special day at a hotel.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "호텔에서 있었던 특별한 날을 떠올린다고 말하기. → 내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기. → 도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 줬다고 설명하기. → 정말 놀라서 거의 울 뻔했다고 말하기. → 친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기.",
          "questionEn": "Tell me about a hotel stay you remember well. What happened during your stay, and why was it memorable?",
          "type": "과거 경험",
          "hintSteps": [
            "호텔에서 있었던 특별한 날을 떠올린다고 말하기.",
            "내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기.",
            "도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 줬다고 설명하기.",
            "정말 놀라서 거의 울 뻔했다고 말하기.",
            "친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-11-q5",
          "number": "Q5",
          "question": "호텔을 어떻게 고르고 예약하나요? 예약 전에 보통 무엇을 확인하는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I book a hotel, I check the location and price first.",
            "Then, I look at pictures of the room.",
            "I like a quiet room with a nice view.",
            "I also check if breakfast is included.",
            "After that, I book the room online and save the details on my phone.",
            "So yeah, that's how I usually book a hotel."
          ],
          "hint": "예약할 때 먼저 호텔 위치와 가격을 확인한다고 말하기. → 그다음 객실 사진을 본다고 설명하기. → 조용하고 전망이 좋은 방을 좋아한다고 말하기. → 조식 포함 여부도 확인한다고 설명하기. → 온라인으로 예약하고 휴대폰에 정보를 저장한다고 말하기. → 이것이 평소 호텔 예약 방법이라고 마무리하기.",
          "questionEn": "How do you choose and book a hotel? Explain what you normally check before making a reservation.",
          "type": "일과·절차",
          "hintSteps": [
            "예약할 때 먼저 호텔 위치와 가격을 확인한다고 말하기.",
            "그다음 객실 사진을 본다고 설명하기.",
            "조용하고 전망이 좋은 방을 좋아한다고 말하기.",
            "조식 포함 여부도 확인한다고 설명하기.",
            "온라인으로 예약하고 휴대폰에 정보를 저장한다고 말하기.",
            "이것이 평소 호텔 예약 방법이라고 마무리하기."
          ]
        },
        {
          "id": "topic-11-q6",
          "number": "Q6",
          "question": "호텔에서 겪은 문제를 말해 주세요. 무슨 문제였고, 누가 도와주었으며, 어떻게 해결했나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had at a hotel.",
            "I tried to open my room, but the key didn't work.",
            "So I went to the front desk and told the staff about the problem.",
            "They said sorry and gave me a new key.",
            "I tried the new key, and luckily, the door opened.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "호텔에서 겪었던 문제를 말하기. → 객실 문을 열려고 했지만 열쇠가 작동하지 않았다고 설명하기. → 프런트에 가서 직원에게 문제를 말했다고 말하기. → 직원이 사과하고 새 열쇠를 줬다고 설명하기. → 새 열쇠를 사용하자 다행히 문이 열렸다고 말하기. → 결국 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a problem you had at a hotel. What went wrong, who helped you, and how was it resolved?",
          "type": "문제 경험",
          "hintSteps": [
            "호텔에서 겪었던 문제를 말하기.",
            "객실 문을 열려고 했지만 열쇠가 작동하지 않았다고 설명하기.",
            "프런트에 가서 직원에게 문제를 말했다고 말하기.",
            "직원이 사과하고 새 열쇠를 줬다고 설명하기.",
            "새 열쇠를 사용하자 다행히 문이 열렸다고 말하기.",
            "결국 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-11-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-11-q1"
          ]
        },
        {
          "id": "topic-11-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-11-q2",
            "topic-11-q5"
          ]
        },
        {
          "id": "topic-11-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-11-q3",
            "topic-11-q4"
          ]
        },
        {
          "id": "topic-11-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-11-q6"
          ]
        }
      ]
    },
    {
      "id": "topic-12",
      "order": 12,
      "title": "음식점",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-12-q1",
          "number": "Q1",
          "question": "체인 음식점과 동네 음식점에서 식사한 경험을 떠올려 보세요. 두 경험을 비교하고 가장 큰 차이를 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I went to a chain restaurant and a small local restaurant last month.",
            "At the chain restaurant, I ordered pasta.",
            "I had eaten it before, so I knew the taste.",
            "But at the local restaurant, I tried a new dish.",
            "It was different, but I really liked it.",
            "So yeah, the biggest difference was the food."
          ],
          "hint": "지난달 체인 음식점과 동네의 작은 음식점에 갔다고 말하기. → 체인점에서는 파스타를 주문했다고 설명하기. → 전에 먹어 봐서 맛을 알고 있었다고 말하기. → 동네 음식점에서는 새로운 음식을 먹어 봤다고 비교하기. → 맛이 달랐지만 정말 마음에 들었다고 말하기. → 가장 큰 차이는 음식이었다고 마무리하기.",
          "questionEn": "Think of meals you have had at a chain restaurant and a local restaurant. Compare the two experiences and explain the biggest difference.",
          "type": "변화·비교",
          "hintSteps": [
            "지난달 체인 음식점과 동네의 작은 음식점에 갔다고 말하기.",
            "체인점에서는 파스타를 주문했다고 설명하기.",
            "전에 먹어 봐서 맛을 알고 있었다고 말하기.",
            "동네 음식점에서는 새로운 음식을 먹어 봤다고 비교하기.",
            "맛이 달랐지만 정말 마음에 들었다고 말하기.",
            "가장 큰 차이는 음식이었다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-12-q2",
          "number": "Q2",
          "question": "사람들이 건강에 관심을 가지면서 음식점 메뉴가 어떻게 달라졌나요? 예전과 지금 선택할 수 있는 메뉴를 비교해 주세요.",
          "status": "필수",
          "answer": [
            "I think restaurant menus have changed a lot.",
            "In the past, I didn't see many healthy dishes on menus.",
            "Most of the time, I saw meat or fried food.",
            "But now, I can find salads and vegetable dishes, too.",
            "Many people care about their health, so they want more choices.",
            "So yeah, it's easier to eat healthy food now."
          ],
          "hint": "음식점 메뉴가 많이 달라졌다고 말하기. → 예전에는 건강한 음식을 메뉴에서 많이 보지 못했다고 설명하기. → 대부분 고기나 튀긴 음식을 봤다고 말하기. → 지금은 샐러드나 채소 요리도 찾을 수 있다고 비교하기. → 건강에 관심 있는 사람들이 더 다양한 선택지를 원한다고 설명하기. → 지금은 건강한 음식을 먹기 더 쉽다고 마무리하기.",
          "questionEn": "How have restaurant menus changed as people have become more interested in health? Compare past and present choices.",
          "type": "변화·비교",
          "hintSteps": [
            "음식점 메뉴가 많이 달라졌다고 말하기.",
            "예전에는 건강한 음식을 메뉴에서 많이 보지 못했다고 설명하기.",
            "대부분 고기나 튀긴 음식을 봤다고 말하기.",
            "지금은 샐러드나 채소 요리도 찾을 수 있다고 비교하기.",
            "건강에 관심 있는 사람들이 더 다양한 선택지를 원한다고 설명하기.",
            "지금은 건강한 음식을 먹기 더 쉽다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-12-q3",
          "number": "Q3",
          "question": "좋아하는 음식점을 묘사해 주세요. 어디에 있고, 어떤 음식을 팔며, 내부는 어떻게 생겼나요?",
          "status": "필수",
          "answer": [
            "There is a pasta restaurant near my home.",
            "It's about five minutes away on foot.",
            "It serves pasta, salads, and drinks.",
            "The seating area isn't very big, but it has comfortable chairs and small tables.",
            "I like the atmosphere because it feels calm and cozy.",
            "So yeah, it's my favorite restaurant."
          ],
          "hint": "집 근처에 파스타 음식점이 있다고 말하기. → 걸어서 약 5분 거리라고 위치 설명하기. → 파스타, 샐러드, 음료를 판다고 설명하기. → 좌석 공간은 작지만 편안한 의자와 작은 테이블이 있다고 묘사하기. → 차분하고 아늑한 분위기를 좋아한다고 말하기. → 가장 좋아하는 음식점이라고 마무리하기.",
          "questionEn": "Describe a restaurant you like. Where is it, what kind of food does it serve, and what does the inside look like?",
          "type": "묘사",
          "hintSteps": [
            "집 근처에 파스타 음식점이 있다고 말하기.",
            "걸어서 약 5분 거리라고 위치 설명하기.",
            "파스타, 샐러드, 음료를 판다고 설명하기.",
            "좌석 공간은 작지만 편안한 의자와 작은 테이블이 있다고 묘사하기.",
            "차분하고 아늑한 분위기를 좋아한다고 말하기.",
            "가장 좋아하는 음식점이라고 마무리하기."
          ]
        },
        {
          "id": "topic-12-q4",
          "number": "Q4",
          "question": "음식점에서 식사할 때 보통 무엇을 하나요? 주문하는 방법과 식사 중·후에 하는 일을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "When I go to a restaurant, I find a nice seat first.",
            "Then, I look at the menu and order some food.",
            "I usually order pasta and a drink.",
            "While I wait, I check my phone for a while.",
            "After eating, I pay the bill and thank the staff.",
            "So yeah, that's what I usually do at a restaurant."
          ],
          "hint": "음식점에 가면 먼저 좋은 자리를 찾는다고 말하기. → 메뉴를 보고 음식을 주문한다고 설명하기. → 보통 파스타와 음료를 주문한다고 말하기. → 음식을 기다리며 휴대폰을 확인한다고 설명하기. → 식사 후 계산하고 직원에게 감사 인사를 한다고 말하기. → 평소 음식점에서 하는 일을 정리하기.",
          "questionEn": "What do you normally do when you eat at a restaurant? Explain how you order and what you do during and after the meal.",
          "type": "일과·절차",
          "hintSteps": [
            "음식점에 가면 먼저 좋은 자리를 찾는다고 말하기.",
            "메뉴를 보고 음식을 주문한다고 설명하기.",
            "보통 파스타와 음료를 주문한다고 말하기.",
            "음식을 기다리며 휴대폰을 확인한다고 설명하기.",
            "식사 후 계산하고 직원에게 감사 인사를 한다고 말하기.",
            "평소 음식점에서 하는 일을 정리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-12-q5",
          "number": "Q5",
          "question": "음식점에서 겪은 문제를 말해 주세요. 어떻게 설명했고, 직원은 어떻게 대응했나요?",
          "status": "필수",
          "answer": [
            "Well, I remember one problem I had at a restaurant.",
            "One day, I ordered pasta, but they gave me the wrong dish.",
            "I was a little surprised, so I told the staff about the problem.",
            "They said sorry and brought me the right dish.",
            "After that, I enjoyed my meal.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "음식점에서 겪은 문제를 떠올렸다고 말하기. → 파스타를 주문했는데 다른 음식이 나왔다고 설명하기. → 조금 놀랐지만 직원에게 문제를 말했다고 말하기. → 직원이 사과하고 올바른 음식을 가져다주었다고 설명하기. → 그 뒤 식사를 즐겼다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a problem you had at a restaurant. How did you explain it, and what did the staff do?",
          "type": "문제 경험",
          "hintSteps": [
            "음식점에서 겪은 문제를 떠올렸다고 말하기.",
            "파스타를 주문했는데 다른 음식이 나왔다고 설명하기.",
            "조금 놀랐지만 직원에게 문제를 말했다고 말하기.",
            "직원이 사과하고 올바른 음식을 가져다주었다고 설명하기.",
            "그 뒤 식사를 즐겼다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-12-q6",
          "number": "Q6",
          "question": "가장 최근 외식한 경험을 말해 주세요. 어디에 갔고, 무엇을 주문했으며, 식사는 어땠나요?",
          "status": "선택",
          "answer": [
            "The last time I ate out was last weekend.",
            "I went to a pasta restaurant near my home.",
            "I found a comfortable seat and ordered pasta and a drink.",
            "The pasta was really good, and I enjoyed it.",
            "Before I left, I paid the bill and thanked the staff.",
            "So yeah, I had a really nice meal."
          ],
          "hint": "가장 최근 외식은 지난 주말이었다고 말하기. → 집 근처 파스타 음식점에 갔다고 설명하기. → 편안한 자리를 찾아 파스타와 음료를 주문했다고 말하기. → 파스타가 맛있었고 맛있게 먹었다고 설명하기. → 떠나기 전에 계산하고 직원에게 감사했다고 말하기. → 정말 좋은 식사였다고 마무리하기.",
          "questionEn": "Tell me about the last time you ate out. Where did you go, what did you order, and how was the meal?",
          "type": "과거 경험",
          "hintSteps": [
            "가장 최근 외식은 지난 주말이었다고 말하기.",
            "집 근처 파스타 음식점에 갔다고 설명하기.",
            "편안한 자리를 찾아 파스타와 음료를 주문했다고 말하기.",
            "파스타가 맛있었고 맛있게 먹었다고 설명하기.",
            "떠나기 전에 계산하고 직원에게 감사했다고 말하기.",
            "정말 좋은 식사였다고 마무리하기."
          ]
        },
        {
          "id": "topic-12-q7",
          "number": "Q7",
          "question": "배달이나 포장으로 어떤 음식을 주문하는 것을 좋아하나요? 본인에게 좋은 선택인 이유를 설명해 주세요.",
          "status": "선택",
          "answer": [
            "When I'm too tired to cook, I order some food.",
            "I usually order pasta from a restaurant near my home.",
            "The food is good, and I don't have to cook.",
            "I also don't have to wash many dishes.",
            "I just sit on my sofa, eat my food, and relax.",
            "So yeah, ordering food is really convenient for me."
          ],
          "hint": "요리하기 너무 피곤할 때 음식을 주문한다고 말하기. → 보통 집 근처 음식점에서 파스타를 주문한다고 설명하기. → 맛도 좋고 직접 요리하지 않아도 된다고 말하기. → 설거지도 많이 하지 않아도 된다고 설명하기. → 소파에 앉아 먹고 쉰다고 말하기. → 배달 음식이 나에게 편리하다고 마무리하기.",
          "questionEn": "What food do you like to order for delivery or takeout? Explain why it is a good choice for you.",
          "type": "의견·이유",
          "hintSteps": [
            "요리하기 너무 피곤할 때 음식을 주문한다고 말하기.",
            "보통 집 근처 음식점에서 파스타를 주문한다고 설명하기.",
            "맛도 좋고 직접 요리하지 않아도 된다고 말하기.",
            "설거지도 많이 하지 않아도 된다고 설명하기.",
            "소파에 앉아 먹고 쉰다고 말하기.",
            "배달 음식이 나에게 편리하다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-12-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-12-q3"
          ]
        },
        {
          "id": "topic-12-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-12-q4"
          ]
        },
        {
          "id": "topic-12-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-12-q6"
          ]
        },
        {
          "id": "topic-12-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-12-q5"
          ]
        },
        {
          "id": "topic-12-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-12-q1",
            "topic-12-q2"
          ]
        },
        {
          "id": "topic-12-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-12-q7"
          ]
        }
      ]
    },
    {
      "id": "topic-13",
      "order": 13,
      "title": "재활용",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-13-q1",
          "number": "Q1",
          "question": "한국에서는 사람들이 어떻게 재활용하나요? 물건을 분류하는 방법과 가져가는 곳을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "In Korea, recycling is common and very important.",
            "People have to separate paper, plastic, glass, and cans.",
            "First, they empty and clean the containers.",
            "Then, they take everything to the recycling area.",
            "They put each item in the right bin.",
            "In some places, people may have to pay a fine if they don't follow the rules."
          ],
          "hint": "한국에서 재활용이 흔하고 중요하다고 말하기. → 종이, 플라스틱, 유리, 캔을 분리해야 한다고 설명하기. → 먼저 용기를 비우고 씻는다고 말하기. → 재활용품을 수거 장소로 가져간다고 설명하기. → 종류에 맞는 수거함에 넣는다고 말하기. → 지역에 따라 규칙을 어기면 과태료를 낼 수 있다고 덧붙이기.",
          "questionEn": "How do people recycle in Korea? Explain how items are sorted and where people take them.",
          "type": "일과·절차",
          "hintSteps": [
            "한국에서 재활용이 흔하고 중요하다고 말하기.",
            "종이, 플라스틱, 유리, 캔을 분리해야 한다고 설명하기.",
            "먼저 용기를 비우고 씻는다고 말하기.",
            "재활용품을 수거 장소로 가져간다고 설명하기.",
            "종류에 맞는 수거함에 넣는다고 말하기.",
            "지역에 따라 규칙을 어기면 과태료를 낼 수 있다고 덧붙이기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-13-q2",
          "number": "Q2",
          "question": "집에서 하는 재활용 일과를 설명해 주세요. 얼마나 자주 하며, 어떤 순서로 하나요?",
          "status": "필수",
          "answer": [
            "I usually take out the recycling on weekends.",
            "First, I collect paper, plastic, glass, and cans at home.",
            "Then, I empty and clean the containers.",
            "After that, I put each type in a separate bag.",
            "I take the bags to the recycling area and put the items in the right bins.",
            "So yeah, that's my recycling routine."
          ],
          "hint": "보통 주말에 재활용품을 내놓는다고 말하기. → 집에서 종이, 플라스틱, 유리, 캔을 모은다고 설명하기. → 용기를 비우고 씻는다고 말하기. → 종류마다 다른 봉투에 담는다고 설명하기. → 재활용장에 가져가 맞는 수거함에 넣는다고 말하기. → 이것이 나의 재활용 일과라고 마무리하기.",
          "questionEn": "Walk me through your recycling routine at home. How often do you recycle, and what steps do you follow?",
          "type": "일과·절차",
          "hintSteps": [
            "보통 주말에 재활용품을 내놓는다고 말하기.",
            "집에서 종이, 플라스틱, 유리, 캔을 모은다고 설명하기.",
            "용기를 비우고 씻는다고 말하기.",
            "종류마다 다른 봉투에 담는다고 설명하기.",
            "재활용장에 가져가 맞는 수거함에 넣는다고 말하기.",
            "이것이 나의 재활용 일과라고 마무리하기."
          ]
        },
        {
          "id": "topic-13-q3",
          "number": "Q3",
          "question": "재활용을 하다가 겪은 문제를 말해 주세요. 무슨 일이 있었고, 어떻게 대처했나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had while recycling.",
            "One day, I went to the recycling area, but the bins were full.",
            "So I took my bags back home.",
            "I went there again the next morning.",
            "Luckily, the bins were empty, so I put my recycling in them.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "재활용하다가 문제가 생긴 경험으로 시작하기. → 재활용장에 갔는데 수거함이 가득 차 있었다고 설명하기. → 봉투를 다시 집으로 가져왔다고 말하기. → 다음 날 아침에 다시 갔다고 설명하기. → 수거함이 비어 있어서 재활용품을 넣었다고 결과 말하기. → 결국 잘 해결되었다고 마무리하기.",
          "questionEn": "Tell me about a problem you had while recycling. What happened, and what did you do about it?",
          "type": "문제 경험",
          "hintSteps": [
            "재활용하다가 문제가 생긴 경험으로 시작하기.",
            "재활용장에 갔는데 수거함이 가득 차 있었다고 설명하기.",
            "봉투를 다시 집으로 가져왔다고 말하기.",
            "다음 날 아침에 다시 갔다고 설명하기.",
            "수거함이 비어 있어서 재활용품을 넣었다고 결과 말하기.",
            "결국 잘 해결되었다고 마무리하기."
          ]
        },
        {
          "id": "topic-13-q4",
          "number": "Q4",
          "question": "본인 지역의 재활용 방식은 어떻게 달라졌나요? 예전과 지금의 시설과 사람들의 습관을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "I think recycling has changed a lot in my area.",
            "In the past, there were fewer recycling bins.",
            "Sometimes, people put different things in the same bin.",
            "But now, the bins have clearer signs.",
            "People also separate paper, plastic, and cans more carefully.",
            "So yeah, I think recycling is easier now."
          ],
          "hint": "동네 재활용 방식이 많이 달라졌다고 말하기. → 예전에는 재활용 수거함이 더 적었다고 설명하기. → 종류가 다른 물건을 같은 곳에 넣는 경우도 있었다고 말하기. → 지금은 수거함 표시가 더 명확하다고 비교하기. → 종이, 플라스틱, 캔을 더 꼼꼼히 분리한다고 설명하기. → 지금이 재활용하기 더 쉽다고 마무리하기.",
          "questionEn": "How has recycling changed in your area? Compare the facilities and people's habits in the past and now.",
          "type": "변화·비교",
          "hintSteps": [
            "동네 재활용 방식이 많이 달라졌다고 말하기.",
            "예전에는 재활용 수거함이 더 적었다고 설명하기.",
            "종류가 다른 물건을 같은 곳에 넣는 경우도 있었다고 말하기.",
            "지금은 수거함 표시가 더 명확하다고 비교하기.",
            "종이, 플라스틱, 캔을 더 꼼꼼히 분리한다고 설명하기.",
            "지금이 재활용하기 더 쉽다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-13-q5",
          "number": "Q5",
          "question": "재활용은 왜 중요한가요? 어떤 도움이 되는지 설명하고 사람들이 할 수 있는 행동의 예를 들어 주세요.",
          "status": "선택",
          "answer": [
            "Well, I think recycling is very important in Korea.",
            "We need to separate paper, plastic, glass, and cans.",
            "That helps reduce trash and protect the environment.",
            "For example, I usually take out the recycling on weekends.",
            "I clean the containers and put them in the right bins.",
            "So yeah, I think it's a good habit."
          ],
          "hint": "한국에서 재활용이 중요하다고 생각한다고 말하기. → 종이, 플라스틱, 유리, 캔을 분리해야 한다고 설명하기. → 쓰레기를 줄이고 환경을 보호하는 데 도움이 된다고 말하기. → 예를 들어 자신은 주말에 재활용품을 배출한다고 설명하기. → 용기를 씻어 알맞은 수거함에 넣는다고 말하기. → 좋은 습관이라고 마무리하기.",
          "questionEn": "Why is recycling important? Explain how it helps and give an example of something people can do.",
          "type": "의견·이유",
          "hintSteps": [
            "한국에서 재활용이 중요하다고 생각한다고 말하기.",
            "종이, 플라스틱, 유리, 캔을 분리해야 한다고 설명하기.",
            "쓰레기를 줄이고 환경을 보호하는 데 도움이 된다고 말하기.",
            "예를 들어 자신은 주말에 재활용품을 배출한다고 설명하기.",
            "용기를 씻어 알맞은 수거함에 넣는다고 말하기.",
            "좋은 습관이라고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-13-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-13-q1",
            "topic-13-q2"
          ]
        },
        {
          "id": "topic-13-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-13-q3"
          ]
        },
        {
          "id": "topic-13-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-13-q4"
          ]
        },
        {
          "id": "topic-13-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-13-q5"
          ]
        }
      ]
    },
    {
      "id": "topic-14",
      "order": 14,
      "title": "은행",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-14-q1",
          "number": "Q1",
          "question": "한국의 일반적인 은행을 묘사해 주세요. 내부는 어떻게 생겼고, 어떤 시설이 보이나요?",
          "status": "필수",
          "answer": [
            "There is a bank near my home.",
            "It has ATMs near the entrance.",
            "Inside, there are desks and chairs for customers.",
            "There is also a machine that gives you a number.",
            "The bank is usually clean and quiet.",
            "So yeah, that's a typical bank in Korea."
          ],
          "hint": "집 근처에 은행이 있다고 시작하기. → 입구 근처에 ATM이 있다고 말하기. → 안에 창구와 고객용 의자가 있다고 묘사하기. → 번호표를 주는 기계도 있다고 덧붙이기. → 보통 깨끗하고 조용하다고 말하기. → 이것이 한국의 일반적인 은행 모습이라고 마무리하기.",
          "questionEn": "Describe a typical bank in Korea. What does the inside look like, and what facilities can you see?",
          "type": "묘사",
          "hintSteps": [
            "집 근처에 은행이 있다고 시작하기.",
            "입구 근처에 ATM이 있다고 말하기.",
            "안에 창구와 고객용 의자가 있다고 묘사하기.",
            "번호표를 주는 기계도 있다고 덧붙이기.",
            "보통 깨끗하고 조용하다고 말하기.",
            "이것이 한국의 일반적인 은행 모습이라고 마무리하기."
          ]
        },
        {
          "id": "topic-14-q2",
          "number": "Q2",
          "question": "가장 최근 은행에 갔던 경험을 말해 주세요. 왜 갔고, 방문 중 어떤 일이 있었나요?",
          "status": "필수",
          "answer": [
            "The last time I went to a bank was last month.",
            "My bank card wasn't working, so I went there to get help.",
            "First, I took a number and waited.",
            "Then, I told the staff about the problem and showed my ID.",
            "They gave me a new card, and it worked.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "최근 은행에 간 때는 지난달이었다고 말하기. → 카드가 작동하지 않아 도움받으러 갔다고 이유 설명하기. → 번호표를 뽑고 기다렸다고 말하기. → 직원에게 문제를 말하고 신분증을 보여 주었다고 설명하기. → 새 카드를 받았고 작동했다고 결과 말하기. → 결국 잘 해결되었다고 마무리하기.",
          "questionEn": "Tell me about your most recent visit to a bank. Why did you go, and what happened during your visit?",
          "type": "과거 경험",
          "hintSteps": [
            "최근 은행에 간 때는 지난달이었다고 말하기.",
            "카드가 작동하지 않아 도움받으러 갔다고 이유 설명하기.",
            "번호표를 뽑고 기다렸다고 말하기.",
            "직원에게 문제를 말하고 신분증을 보여 주었다고 설명하기.",
            "새 카드를 받았고 작동했다고 결과 말하기.",
            "결국 잘 해결되었다고 마무리하기."
          ]
        },
        {
          "id": "topic-14-q3",
          "number": "Q3",
          "question": "은행 계좌를 개설해야 한다고 가정해 보세요. 서류 준비부터 계좌 개설까지 할 일을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "If I need to open a bank account, I check what documents I need first.",
            "Then, I take my ID and the documents to the bank.",
            "When I get there, I tell the staff I want to open an account.",
            "The staff helps me fill out a form.",
            "After that, I can use my new account on my phone.",
            "So yeah, that's how I would open a bank account."
          ],
          "hint": "계좌를 만들려면 먼저 필요한 서류를 확인하겠다고 말하기. → 신분증과 필요한 서류를 은행에 가져가겠다고 설명하기. → 은행에 도착하면 직원에게 계좌를 만들고 싶다고 말하기. → 직원의 도움을 받아 신청서를 작성한다고 설명하기. → 그 후 휴대폰으로 새 계좌를 이용할 수 있다고 말하기. → 이렇게 계좌를 만들겠다고 마무리하기.",
          "questionEn": "Suppose you need to open a bank account. Explain the steps you would take, from preparing documents to opening the account.",
          "type": "일과·절차",
          "hintSteps": [
            "계좌를 만들려면 먼저 필요한 서류를 확인하겠다고 말하기.",
            "신분증과 필요한 서류를 은행에 가져가겠다고 설명하기.",
            "은행에 도착하면 직원에게 계좌를 만들고 싶다고 말하기.",
            "직원의 도움을 받아 신청서를 작성한다고 설명하기.",
            "그 후 휴대폰으로 새 계좌를 이용할 수 있다고 말하기.",
            "이렇게 계좌를 만들겠다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-14-q4",
          "number": "Q4",
          "question": "은행을 이용하는 방식이 어떻게 달라졌나요? 예전의 지점 방문과 지금의 이용 방식을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "The way people use banks has changed a lot.",
            "In the past, people went to a bank to send money.",
            "They took a number and waited for a long time.",
            "But now, they can use a banking app on their phone.",
            "They can send money and check their account at home.",
            "So yeah, banking is faster and easier now."
          ],
          "hint": "은행을 이용하는 방식이 많이 달라졌다고 시작하기. → 예전에는 송금하려고 은행에 갔다고 말하기. → 번호표를 뽑고 오래 기다렸다고 설명하기. → 지금은 휴대폰의 은행 앱을 쓸 수 있다고 비교하기. → 집에서 송금하고 계좌를 확인할 수 있다고 설명하기. → 지금은 더 빠르고 쉬워졌다고 마무리하기.",
          "questionEn": "How has the way people use banks changed? Compare visiting a branch in the past with using banking services now.",
          "type": "변화·비교",
          "hintSteps": [
            "은행을 이용하는 방식이 많이 달라졌다고 시작하기.",
            "예전에는 송금하려고 은행에 갔다고 말하기.",
            "번호표를 뽑고 오래 기다렸다고 설명하기.",
            "지금은 휴대폰의 은행 앱을 쓸 수 있다고 비교하기.",
            "집에서 송금하고 계좌를 확인할 수 있다고 설명하기.",
            "지금은 더 빠르고 쉬워졌다고 마무리하기."
          ]
        },
        {
          "id": "topic-14-q5",
          "number": "Q5",
          "question": "사람들은 은행에서 보통 무엇을 하나요? 흔한 업무 몇 가지와 직원이 돕는 방법을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "People go to banks to open accounts or get help.",
            "They also use ATMs to get cash.",
            "The staff ask what the customer needs.",
            "Then, they check the customer's ID and explain what to do.",
            "For example, they help people fill out forms for a new account.",
            "So yeah, that's what people usually do at banks."
          ],
          "hint": "사람들은 계좌를 만들거나 도움받으러 은행에 간다고 말하기. → 현금을 찾기 위해 ATM도 쓴다고 설명하기. → 직원은 고객에게 필요한 업무를 묻는다고 말하기. → 신분증을 확인하고 해야 할 일을 설명한다고 말하기. → 새 계좌 신청서 작성을 도와주는 예를 들기. → 이것이 은행에서 보통 하는 일이라고 마무리하기.",
          "questionEn": "What do people usually do at banks? Explain a few common tasks and how bank staff help with them.",
          "type": "일과·절차",
          "hintSteps": [
            "사람들은 계좌를 만들거나 도움받으러 은행에 간다고 말하기.",
            "현금을 찾기 위해 ATM도 쓴다고 설명하기.",
            "직원은 고객에게 필요한 업무를 묻는다고 말하기.",
            "신분증을 확인하고 해야 할 일을 설명한다고 말하기.",
            "새 계좌 신청서 작성을 도와주는 예를 들기.",
            "이것이 은행에서 보통 하는 일이라고 마무리하기."
          ]
        },
        {
          "id": "topic-14-q6",
          "number": "Q6",
          "question": "은행 카드가 작동하지 않았던 경험을 말해 주세요. 어떻게 대처했고, 문제는 어떻게 해결됐나요?",
          "status": "선택",
          "answer": [
            "I remember one problem I had with my bank card.",
            "One day, it stopped working, so I went to the bank.",
            "First, I took a number and waited.",
            "Then, I told the staff about the problem and showed my ID.",
            "They gave me a new card, and it worked.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "은행 카드에 문제가 생긴 경험으로 시작하기. → 어느 날 카드가 작동하지 않아 은행에 갔다고 설명하기. → 번호표를 뽑고 기다렸다고 말하기. → 직원에게 문제를 말하고 신분증을 보여 주었다고 설명하기. → 새 카드를 받았고 작동했다고 결과 말하기. → 결국 잘 해결되었다고 마무리하기.",
          "questionEn": "Tell me about a time your bank card did not work. What did you do, and how was the problem solved?",
          "type": "문제 경험",
          "hintSteps": [
            "은행 카드에 문제가 생긴 경험으로 시작하기.",
            "어느 날 카드가 작동하지 않아 은행에 갔다고 설명하기.",
            "번호표를 뽑고 기다렸다고 말하기.",
            "직원에게 문제를 말하고 신분증을 보여 주었다고 설명하기.",
            "새 카드를 받았고 작동했다고 결과 말하기.",
            "결국 잘 해결되었다고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-14-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-14-q1"
          ]
        },
        {
          "id": "topic-14-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-14-q3",
            "topic-14-q5"
          ]
        },
        {
          "id": "topic-14-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-14-q2"
          ]
        },
        {
          "id": "topic-14-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-14-q6"
          ]
        },
        {
          "id": "topic-14-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-14-q4"
          ]
        }
      ]
    },
    {
      "id": "topic-15",
      "order": 15,
      "title": "휴대폰 / 전자제품 / 기술",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-15-q1",
          "number": "Q1",
          "question": "가장 자주 사용하는 전자기기는 무엇인가요? 일상 활동 몇 가지에 어떻게 사용하는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "The device I use most is my phone.",
            "I use it every day to watch YouTube and listen to music.",
            "For music, I open an app and choose a song.",
            "I also use it to take pictures and send messages.",
            "When I need information, I search for it on my phone.",
            "So yeah, my phone is really useful."
          ],
          "hint": "가장 많이 쓰는 기기는 휴대폰이라고 말하기. → 매일 유튜브와 음악 감상에 쓴다고 설명하기. → 음악 앱을 열고 노래를 고른다고 사용 방법 말하기. → 사진 촬영과 메시지 전송에도 쓴다고 덧붙이기. → 정보가 필요하면 휴대폰으로 검색한다고 말하기. → 휴대폰이 정말 유용하다고 마무리하기.",
          "questionEn": "Which electronic device do you use most often? Explain how you use it for a few everyday activities.",
          "type": "일과·절차",
          "hintSteps": [
            "가장 많이 쓰는 기기는 휴대폰이라고 말하기.",
            "매일 유튜브와 음악 감상에 쓴다고 설명하기.",
            "음악 앱을 열고 노래를 고른다고 사용 방법 말하기.",
            "사진 촬영과 메시지 전송에도 쓴다고 덧붙이기.",
            "정보가 필요하면 휴대폰으로 검색한다고 말하기.",
            "휴대폰이 정말 유용하다고 마무리하기."
          ]
        },
        {
          "id": "topic-15-q2",
          "number": "Q2",
          "question": "예전 휴대폰과 지금 사용하는 휴대폰을 비교해 주세요. 할 수 있는 일이 어떻게 달라졌나요?",
          "status": "필수",
          "answer": [
            "My phone is much more useful now.",
            "My old phone had a small screen and a simple camera.",
            "I mainly used it to make calls and send messages.",
            "But now, I can watch YouTube and use banking apps.",
            "I can also take better pictures with my new phone.",
            "So yeah, I can do more things on it now."
          ],
          "hint": "지금 휴대폰은 훨씬 더 유용하다고 시작하기. → 예전 휴대폰은 화면이 작고 카메라도 단순했다고 설명하기. → 주로 전화와 메시지에 사용했다고 말하기. → 지금은 유튜브와 은행 앱을 쓸 수 있다고 비교하기. → 더 좋은 사진도 찍을 수 있다고 덧붙이기. → 지금은 더 많은 일을 할 수 있다고 마무리하기.",
          "questionEn": "Compare mobile phones from the past with the phones people use now. What can people do with them today that was different before?",
          "type": "변화·비교",
          "hintSteps": [
            "지금 휴대폰은 훨씬 더 유용하다고 시작하기.",
            "예전 휴대폰은 화면이 작고 카메라도 단순했다고 설명하기.",
            "주로 전화와 메시지에 사용했다고 말하기.",
            "지금은 유튜브와 은행 앱을 쓸 수 있다고 비교하기.",
            "더 좋은 사진도 찍을 수 있다고 덧붙이기.",
            "지금은 더 많은 일을 할 수 있다고 마무리하기."
          ]
        },
        {
          "id": "topic-15-q3",
          "number": "Q3",
          "question": "휴대폰이 작동하지 않았던 경험을 말해 주세요. 무엇을 하던 중이었고, 어떻게 대처했으며, 그다음 어떻게 됐나요?",
          "status": "필수",
          "answer": [
            "Well, I remember one problem I had with my phone.",
            "One day, I was taking a walk and listening to music.",
            "I accidentally dropped my phone, and it turned off.",
            "I tried to turn it on, but it didn't work.",
            "So I pressed the power button a few times, and luckily, it turned on again.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "휴대폰에 문제가 생겼던 경험을 떠올렸다고 말하기. → 어느 날 산책하면서 음악을 듣고 있었다고 설명하기. → 실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기. → 다시 켜려고 했지만 작동하지 않았다고 설명하기. → 전원 버튼을 몇 번 눌렀더니 다행히 다시 켜졌다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a time your phone stopped working. What were you doing, how did you respond, and what happened next?",
          "type": "문제 경험",
          "hintSteps": [
            "휴대폰에 문제가 생겼던 경험을 떠올렸다고 말하기.",
            "어느 날 산책하면서 음악을 듣고 있었다고 설명하기.",
            "실수로 휴대폰을 떨어뜨렸고 전원이 꺼졌다고 말하기.",
            "다시 켜려고 했지만 작동하지 않았다고 설명하기.",
            "전원 버튼을 몇 번 눌렀더니 다행히 다시 켜졌다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-15-q4",
          "number": "Q4",
          "question": "기술이 일상생활을 어떻게 바꾸었나요? 사람들이 예전에 일상 업무를 하던 방법과 지금의 방법을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "I think technology has made daily life easier.",
            "In the past, people went to banks and stores in person.",
            "It took a lot of time.",
            "But now, they can send money and buy things on their phones.",
            "They can also find information quickly online.",
            "So yeah, technology saves us time."
          ],
          "hint": "기술 덕분에 일상생활이 쉬워졌다고 말하기. → 예전에는 은행과 가게에 직접 갔다고 설명하기. → 시간이 많이 걸렸다고 말하기. → 지금은 휴대폰으로 송금하고 물건을 살 수 있다고 비교하기. → 온라인에서 정보를 빨리 찾을 수도 있다고 덧붙이기. → 기술이 시간을 절약해 준다고 마무리하기.",
          "questionEn": "How has technology changed everyday life? Compare how people did common tasks before with how they do them now.",
          "type": "변화·비교",
          "hintSteps": [
            "기술 덕분에 일상생활이 쉬워졌다고 말하기.",
            "예전에는 은행과 가게에 직접 갔다고 설명하기.",
            "시간이 많이 걸렸다고 말하기.",
            "지금은 휴대폰으로 송금하고 물건을 살 수 있다고 비교하기.",
            "온라인에서 정보를 빨리 찾을 수도 있다고 덧붙이기.",
            "기술이 시간을 절약해 준다고 마무리하기."
          ]
        },
        {
          "id": "topic-15-q5",
          "number": "Q5",
          "question": "사람들이 AI 도구에 관심을 갖는 이유는 무엇인가요? 유용하게 느끼는 점과 걱정할 수 있는 점 하나를 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I think people like AI tools because they save time.",
            "For example, AI can help people write messages and find information.",
            "That's really useful when they are busy.",
            "People can use AI on their phones or computers.",
            "But sometimes AI gives wrong answers.",
            "So I think it's important to check the information."
          ],
          "hint": "AI 도구가 시간을 절약해 주기 때문에 사람들이 좋아한다고 말하기. → 예를 들어 메시지를 쓰거나 정보를 찾는 데 도움이 된다고 설명하기. → 바쁠 때 특히 유용하다고 말하기. → 휴대폰이나 컴퓨터에서 사용할 수 있다고 설명하기. → 하지만 AI가 잘못된 답변을 주기도 한다고 문제를 언급하기. → 그래서 정보를 확인하는 것이 중요하다고 마무리하기.",
          "questionEn": "Why are people interested in AI tools? Explain what they find useful and one concern they may have.",
          "type": "의견·이유",
          "hintSteps": [
            "AI 도구가 시간을 절약해 주기 때문에 사람들이 좋아한다고 말하기.",
            "예를 들어 메시지를 쓰거나 정보를 찾는 데 도움이 된다고 설명하기.",
            "바쁠 때 특히 유용하다고 말하기.",
            "휴대폰이나 컴퓨터에서 사용할 수 있다고 설명하기.",
            "하지만 AI가 잘못된 답변을 주기도 한다고 문제를 언급하기.",
            "그래서 정보를 확인하는 것이 중요하다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-15-q6",
          "number": "Q6",
          "question": "한국의 중요한 산업 하나를 골라 최근 변화를 설명해 주세요. 기업들은 예전에 무엇에 집중했고, 지금은 무엇을 개발하나요?",
          "status": "선택",
          "answer": [
            "I think the technology industry is very important in Korea.",
            "In the past, companies tried to make better phones and computers.",
            "For example, they made better screens and cameras.",
            "But now, many companies are also working on AI.",
            "AI can help people find information and do things faster.",
            "So yeah, I think that's a big change."
          ],
          "hint": "한국에서 기술 산업이 중요하다고 말하기. → 예전에는 기업들이 더 좋은 휴대폰과 컴퓨터를 만드는 데 집중했다고 설명하기. → 예를 들어 화면과 카메라를 개선했다고 말하기. → 지금은 많은 기업이 AI도 개발한다고 비교하기. → AI는 정보를 찾거나 일을 빨리 하는 데 도움을 줄 수 있다고 말하기. → 이것이 큰 변화라고 마무리하기.",
          "questionEn": "Choose an important industry in Korea and describe a recent change in it. What did companies focus on before, and what are they working on now?",
          "type": "변화·비교",
          "hintSteps": [
            "한국에서 기술 산업이 중요하다고 말하기.",
            "예전에는 기업들이 더 좋은 휴대폰과 컴퓨터를 만드는 데 집중했다고 설명하기.",
            "예를 들어 화면과 카메라를 개선했다고 말하기.",
            "지금은 많은 기업이 AI도 개발한다고 비교하기.",
            "AI는 정보를 찾거나 일을 빨리 하는 데 도움을 줄 수 있다고 말하기.",
            "이것이 큰 변화라고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-15-q7",
          "number": "Q7",
          "question": "최근 구입한 전자제품을 말해 주세요. 언제 샀고, 지금은 어떻게 사용하나요?",
          "status": "선택",
          "answer": [
            "Well, I bought a new phone not long ago.",
            "I use it almost every day.",
            "I usually watch YouTube and listen to music on it.",
            "I also take pictures and send messages.",
            "When I need information, I search for it on my phone.",
            "So yeah, I'm really happy with my new phone."
          ],
          "hint": "얼마 전에 새 휴대폰을 샀다고 말하기. → 거의 매일 사용한다고 설명하기. → 유튜브를 보고 음악을 듣는다고 말하기. → 사진을 찍고 메시지도 보낸다고 설명하기. → 정보가 필요할 때 휴대폰으로 찾아본다고 말하기. → 새 휴대폰에 매우 만족한다고 마무리하기.",
          "questionEn": "Tell me about an electronic device you bought recently. When did you buy it, and how do you use it now?",
          "type": "과거 경험·사용",
          "hintSteps": [
            "얼마 전에 새 휴대폰을 샀다고 말하기.",
            "거의 매일 사용한다고 설명하기.",
            "유튜브를 보고 음악을 듣는다고 말하기.",
            "사진을 찍고 메시지도 보낸다고 설명하기.",
            "정보가 필요할 때 휴대폰으로 찾아본다고 말하기.",
            "새 휴대폰에 매우 만족한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-15-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-15-q1"
          ]
        },
        {
          "id": "topic-15-type-6",
          "title": "과거 경험·사용",
          "questionIds": [
            "topic-15-q7"
          ]
        },
        {
          "id": "topic-15-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-15-q3"
          ]
        },
        {
          "id": "topic-15-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-15-q2",
            "topic-15-q4",
            "topic-15-q6"
          ]
        },
        {
          "id": "topic-15-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-15-q5"
          ]
        }
      ]
    },
    {
      "id": "topic-16",
      "order": 16,
      "title": "지형",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-16-q1",
          "number": "Q1",
          "question": "한국의 지형을 묘사해 주세요. 어떤 자연 지형과 풍경을 볼 수 있나요?",
          "status": "필수",
          "answer": [
            "Korea has many mountains and rivers.",
            "The sea is on three sides of the country.",
            "Seoul has a big river called the Han River.",
            "Busan has beautiful beaches, like Haeundae Beach.",
            "There are also fields and small towns.",
            "So yeah, Korea has many different kinds of scenery."
          ],
          "hint": "한국에는 산과 강이 많다고 말하기. → 나라의 세 면이 바다라고 설명하기. → 서울에는 한강이라는 큰 강이 있다고 예를 들기. → 부산에는 해운대 같은 아름다운 해변이 있다고 말하기. → 들판과 작은 마을도 있다고 덧붙이기. → 여러 종류의 풍경을 볼 수 있다고 마무리하기.",
          "questionEn": "Describe the geography of Korea. What kinds of natural features and scenery can people find there?",
          "type": "묘사",
          "hintSteps": [
            "한국에는 산과 강이 많다고 말하기.",
            "나라의 세 면이 바다라고 설명하기.",
            "서울에는 한강이라는 큰 강이 있다고 예를 들기.",
            "부산에는 해운대 같은 아름다운 해변이 있다고 말하기.",
            "들판과 작은 마을도 있다고 덧붙이기.",
            "여러 종류의 풍경을 볼 수 있다고 마무리하기."
          ]
        },
        {
          "id": "topic-16-q2",
          "number": "Q2",
          "question": "한국의 대도시와 작은 지역을 비교해 주세요. 건물·거리·분위기가 어떻게 다른가요?",
          "status": "필수",
          "answer": [
            "Well, big cities and small towns in Korea are very different.",
            "In big cities, there are many tall buildings and busy streets.",
            "There are also many cars and people, so it can be noisy.",
            "But small towns have fewer buildings and quieter streets.",
            "I like quiet places because they make me feel relaxed.",
            "So yeah, I think small towns are more peaceful."
          ],
          "hint": "한국의 큰 도시와 작은 마을이 매우 다르다고 말하기. → 큰 도시는 높은 건물과 복잡한 거리가 많다고 설명하기. → 차와 사람이 많아 시끄러울 수 있다고 말하기. → 반면 작은 마을은 건물이 적고 거리가 더 조용하다고 비교하기. → 조용한 장소가 자신을 편안하게 해서 좋아한다고 말하기. → 작은 마을이 더 평화롭게 느껴진다고 마무리하기.",
          "questionEn": "Compare a big city with a small town in Korea. How do their buildings, streets, and atmosphere differ?",
          "type": "변화·비교",
          "hintSteps": [
            "한국의 큰 도시와 작은 마을이 매우 다르다고 말하기.",
            "큰 도시는 높은 건물과 복잡한 거리가 많다고 설명하기.",
            "차와 사람이 많아 시끄러울 수 있다고 말하기.",
            "반면 작은 마을은 건물이 적고 거리가 더 조용하다고 비교하기.",
            "조용한 장소가 자신을 편안하게 해서 좋아한다고 말하기.",
            "작은 마을이 더 평화롭게 느껴진다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-16-q3",
          "number": "Q3",
          "question": "사는 지역은 어떻게 달라졌나요? 예전의 건물·도로와 지금의 모습을 비교해 주세요.",
          "status": "필수",
          "answer": [
            "The area near my home in Yongin has changed a lot.",
            "When I first moved here, there were fewer buildings and stores.",
            "The roads were quiet, and there weren't many cars.",
            "But now, there are more buildings and wider roads.",
            "The area is busier than before.",
            "So yeah, it's more convenient now, but I miss the quiet streets."
          ],
          "hint": "용인 집 근처 지역이 많이 달라졌다고 말하기. → 처음 이사 왔을 때는 건물과 상점이 더 적었다고 설명하기. → 도로가 조용했고 차도 많지 않았다고 말하기. → 지금은 건물이 많아지고 도로가 넓어졌다고 비교하기. → 이전보다 동네가 더 복잡해졌다고 말하기. → 지금은 더 편리하지만 조용한 거리가 그립다고 마무리하기.",
          "questionEn": "How has the area where you live changed? Compare its buildings and roads in the past with what you see now.",
          "type": "변화·비교",
          "hintSteps": [
            "용인 집 근처 지역이 많이 달라졌다고 말하기.",
            "처음 이사 왔을 때는 건물과 상점이 더 적었다고 설명하기.",
            "도로가 조용했고 차도 많지 않았다고 말하기.",
            "지금은 건물이 많아지고 도로가 넓어졌다고 비교하기.",
            "이전보다 동네가 더 복잡해졌다고 말하기.",
            "지금은 더 편리하지만 조용한 거리가 그립다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-16-q4",
          "number": "Q4",
          "question": "많은 사람이 대도시로 이동하면 어떤 문제가 생길 수 있나요? 주요 문제와 개선 방법 하나를 설명해 주세요.",
          "status": "필수",
          "answer": [
            "Well, I think there are too many people in big cities.",
            "First, there are too many cars, so the roads are very busy.",
            "Also, houses are very expensive.",
            "I think we need more jobs in smaller cities.",
            "Then, people don't have to move to big cities.",
            "So, I think that could help."
          ],
          "hint": "큰 도시에 사람들이 너무 많다고 생각한다고 말하기. → 차가 너무 많아 도로가 혼잡하다고 첫 번째 문제를 설명하기. → 집값도 비싸다고 두 번째 문제를 말하기. → 작은 도시에도 일자리가 더 필요하다고 해결책을 제시하기. → 그러면 사람들이 큰 도시로 이사할 필요가 줄어든다고 설명하기. → 그 방법이 도움이 될 것 같다고 마무리하기.",
          "questionEn": "What problems can arise when many people move to big cities? Explain the main problems and one possible improvement.",
          "type": "의견·이유",
          "hintSteps": [
            "큰 도시에 사람들이 너무 많다고 생각한다고 말하기.",
            "차가 너무 많아 도로가 혼잡하다고 첫 번째 문제를 설명하기.",
            "집값도 비싸다고 두 번째 문제를 말하기.",
            "작은 도시에도 일자리가 더 필요하다고 해결책을 제시하기.",
            "그러면 사람들이 큰 도시로 이사할 필요가 줄어든다고 설명하기.",
            "그 방법이 도움이 될 것 같다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-16-q5",
          "number": "Q5",
          "question": "한국에서 사람들은 어떤 야외 활동을 즐기나요? 어디에서 어떤 활동을 하는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "People in Korea enjoy many outdoor activities.",
            "Some people go hiking in the mountains.",
            "Others ride bikes along rivers.",
            "At the beach, people walk and take pictures.",
            "They also sit on benches and relax for a while.",
            "So yeah, people enjoy spending time outside."
          ],
          "hint": "한국 사람들은 여러 야외 활동을 즐긴다고 말하기. → 산에서 등산하는 예를 들기. → 강을 따라 자전거를 타는 사람들도 있다고 말하기. → 해변에서는 걷고 사진을 찍는다고 설명하기. → 벤치에 앉아 잠시 쉬기도 한다고 덧붙이기. → 밖에서 시간 보내는 것을 즐긴다고 마무리하기.",
          "questionEn": "What outdoor activities do people enjoy in Korea? Explain where they do those activities and what they usually do.",
          "type": "일과·절차",
          "hintSteps": [
            "한국 사람들은 여러 야외 활동을 즐긴다고 말하기.",
            "산에서 등산하는 예를 들기.",
            "강을 따라 자전거를 타는 사람들도 있다고 말하기.",
            "해변에서는 걷고 사진을 찍는다고 설명하기.",
            "벤치에 앉아 잠시 쉬기도 한다고 덧붙이기.",
            "밖에서 시간 보내는 것을 즐긴다고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-16-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-16-q1"
          ]
        },
        {
          "id": "topic-16-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-16-q5"
          ]
        },
        {
          "id": "topic-16-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-16-q2",
            "topic-16-q3"
          ]
        },
        {
          "id": "topic-16-type-9",
          "title": "의견·이유",
          "questionIds": [
            "topic-16-q4"
          ]
        }
      ]
    },
    {
      "id": "topic-17",
      "order": 17,
      "title": "날씨",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-17-q1",
          "number": "Q1",
          "question": "한국의 일 년 동안 날씨는 어떤가요? 사계절 각각의 날씨를 묘사해 주세요.",
          "status": "필수",
          "answer": [
            "Korea has four seasons.",
            "Spring is warm, and there are many flowers.",
            "Summer is hot, and it rains a lot.",
            "Fall is cool, and the air feels nice.",
            "Winter is very cold, and it sometimes snows.",
            "So yeah, the weather changes a lot during the year."
          ],
          "hint": "한국에는 사계절이 있다고 시작하기. → 봄은 따뜻하고 꽃이 많다고 묘사하기. → 여름은 덥고 비가 많이 온다고 말하기. → 가을은 선선하고 공기가 좋다고 설명하기. → 겨울은 매우 춥고 가끔 눈이 온다고 말하기. → 일 년 동안 날씨가 많이 달라진다고 마무리하기.",
          "questionEn": "What is the weather like in Korea throughout the year? Describe the weather in each of the four seasons.",
          "type": "묘사",
          "hintSteps": [
            "한국에는 사계절이 있다고 시작하기.",
            "봄은 따뜻하고 꽃이 많다고 묘사하기.",
            "여름은 덥고 비가 많이 온다고 말하기.",
            "가을은 선선하고 공기가 좋다고 설명하기.",
            "겨울은 매우 춥고 가끔 눈이 온다고 말하기.",
            "일 년 동안 날씨가 많이 달라진다고 마무리하기."
          ]
        },
        {
          "id": "topic-17-q2",
          "number": "Q2",
          "question": "가장 좋아하는 계절은 무엇인가요? 그 계절의 날씨를 묘사하고 평소 하는 활동을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "My favorite season is fall because the weather is cool.",
            "It's not too hot or too cold.",
            "I usually go to the park near my home on weekends.",
            "I walk along the path and look at the trees.",
            "Then, I sit on a bench and listen to music.",
            "So yeah, I really enjoy fall."
          ],
          "hint": "날씨가 선선해서 가을을 가장 좋아한다고 말하기. → 너무 덥지도 춥지도 않다고 설명하기. → 주말에 집 근처 공원에 간다고 말하기. → 길을 따라 걸으며 나무를 본다고 활동 설명하기. → 벤치에 앉아 음악을 듣는다고 말하기. → 가을을 정말 좋아한다고 마무리하기.",
          "questionEn": "What is your favorite season? Describe its weather and explain what you usually do during that season.",
          "type": "묘사·일과",
          "hintSteps": [
            "날씨가 선선해서 가을을 가장 좋아한다고 말하기.",
            "너무 덥지도 춥지도 않다고 설명하기.",
            "주말에 집 근처 공원에 간다고 말하기.",
            "길을 따라 걸으며 나무를 본다고 활동 설명하기.",
            "벤치에 앉아 음악을 듣는다고 말하기.",
            "가을을 정말 좋아한다고 마무리하기."
          ]
        },
        {
          "id": "topic-17-q3",
          "number": "Q3",
          "question": "날씨 때문에 계획을 바꾼 경험을 말해 주세요. 원래 계획은 무엇이었고, 대신 어떻게 했나요?",
          "status": "필수",
          "answer": [
            "Well, I remember one time I had to change my plans because of the weather.",
            "I wanted to go to the park near my home.",
            "But it started raining a lot, so I couldn't go.",
            "So I stayed at home and watched TV instead.",
            "I also listened to music and relaxed on my sofa.",
            "So yeah, it was fine in the end."
          ],
          "hint": "날씨 때문에 계획을 바꿔야 했던 경험이 있다고 말하기. → 집 근처 공원에 가려고 했다고 설명하기. → 비가 많이 와서 갈 수 없었다고 말하기. → 대신 집에 머물며 TV를 봤다고 설명하기. → 소파에서 음악을 듣고 쉬기도 했다고 말하기. → 결국 괜찮은 하루였다고 마무리하기.",
          "questionEn": "Tell me about a time the weather changed your plans. What was the original plan, and what did you do instead?",
          "type": "문제 경험",
          "hintSteps": [
            "날씨 때문에 계획을 바꿔야 했던 경험이 있다고 말하기.",
            "집 근처 공원에 가려고 했다고 설명하기.",
            "비가 많이 와서 갈 수 없었다고 말하기.",
            "대신 집에 머물며 TV를 봤다고 설명하기.",
            "소파에서 음악을 듣고 쉬기도 했다고 말하기.",
            "결국 괜찮은 하루였다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-17-q4",
          "number": "Q4",
          "question": "어릴 때와 비교해 날씨가 달라졌다고 생각하나요? 기억 속 여름·겨울과 최근의 날씨를 비교해 주세요.",
          "status": "필수",
          "answer": [
            "I think the weather has changed since I was a child.",
            "In the past, summers didn't feel so hot to me.",
            "But these days, summers feel much hotter.",
            "Sometimes, it also rains very heavily.",
            "Winters feel a little warmer than before, too.",
            "So yeah, the weather feels different now."
          ],
          "hint": "어릴 때와 비교하면 날씨가 변한 것 같다고 말하기. → 예전 여름은 지금만큼 덥게 느껴지지 않았다고 설명하기. → 요즘 여름은 훨씬 덥다고 비교하기. → 비가 매우 많이 내릴 때도 있다고 말하기. → 겨울도 예전보다 조금 따뜻하게 느껴진다고 설명하기. → 날씨가 예전과 달라진 느낌이라고 마무리하기.",
          "questionEn": "Do you think the weather has changed since you were younger? Compare the summers and winters you remember with recent ones.",
          "type": "변화·비교",
          "hintSteps": [
            "어릴 때와 비교하면 날씨가 변한 것 같다고 말하기.",
            "예전 여름은 지금만큼 덥게 느껴지지 않았다고 설명하기.",
            "요즘 여름은 훨씬 덥다고 비교하기.",
            "비가 매우 많이 내릴 때도 있다고 말하기.",
            "겨울도 예전보다 조금 따뜻하게 느껴진다고 설명하기.",
            "날씨가 예전과 달라진 느낌이라고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-17-type-1",
          "title": "묘사",
          "questionIds": [
            "topic-17-q1"
          ]
        },
        {
          "id": "topic-17-type-4",
          "title": "묘사·일과",
          "questionIds": [
            "topic-17-q2"
          ]
        },
        {
          "id": "topic-17-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-17-q3"
          ]
        },
        {
          "id": "topic-17-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-17-q4"
          ]
        }
      ]
    },
    {
      "id": "topic-18",
      "order": 18,
      "title": "약속 / 모임 / 기념일 / 휴일",
      "source": "unexpected",
      "questions": [
        {
          "id": "topic-18-q1",
          "number": "Q1",
          "question": "친구들과 보통 어떻게 약속을 잡나요? 날짜·시간·장소를 정하는 방법을 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I usually make plans with friends by message.",
            "First, I ask when they are free.",
            "Then, we choose a day and time.",
            "We usually meet at a cafe or restaurant near the station.",
            "Before we meet, I send a message to check the plan.",
            "So yeah, that's how I make plans with my friends."
          ],
          "hint": "보통 메시지로 친구들과 약속을 잡는다고 말하기. → 먼저 언제 시간이 있는지 묻는다고 설명하기. → 그다음 날짜와 시간을 정한다고 말하기. → 장소는 보통 역 근처 카페나 음식점이라고 설명하기. → 만나기 전에 메시지로 계획을 확인한다고 말하기. → 이것이 약속을 잡는 방법이라고 마무리하기.",
          "questionEn": "How do you usually make plans with friends? Explain how you decide on a day, a time, and a place.",
          "type": "일과·절차",
          "hintSteps": [
            "보통 메시지로 친구들과 약속을 잡는다고 말하기.",
            "먼저 언제 시간이 있는지 묻는다고 설명하기.",
            "그다음 날짜와 시간을 정한다고 말하기.",
            "장소는 보통 역 근처 카페나 음식점이라고 설명하기.",
            "만나기 전에 메시지로 계획을 확인한다고 말하기.",
            "이것이 약속을 잡는 방법이라고 마무리하기."
          ]
        },
        {
          "id": "topic-18-q2",
          "number": "Q2",
          "question": "약속을 취소하거나 변경한 경험을 말해 주세요. 무슨 일이 있었고, 새 계획은 어떻게 정했나요?",
          "status": "필수",
          "answer": [
            "I remember one time I had to change plans with a friend.",
            "We planned to meet at a cafe, but I wasn't feeling well.",
            "So I called my friend and said I was sorry.",
            "I asked if we could meet next weekend instead.",
            "My friend said okay, so we met the next weekend.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "친구와의 약속을 바꿨던 경험을 떠올린다고 말하기. → 카페에서 만나기로 했지만 몸이 좋지 않았다고 설명하기. → 친구에게 전화해서 미안하다고 했다고 말하기. → 대신 다음 주말에 만날 수 있는지 물었다고 설명하기. → 친구가 괜찮다고 해서 다음 주말에 만났다고 말하기. → 결국 모든 일이 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a time you canceled or changed an appointment. What happened, and how did you arrange a new plan?",
          "type": "문제 경험",
          "hintSteps": [
            "친구와의 약속을 바꿨던 경험을 떠올린다고 말하기.",
            "카페에서 만나기로 했지만 몸이 좋지 않았다고 설명하기.",
            "친구에게 전화해서 미안하다고 했다고 말하기.",
            "대신 다음 주말에 만날 수 있는지 물었다고 설명하기.",
            "친구가 괜찮다고 해서 다음 주말에 만났다고 말하기.",
            "결국 모든 일이 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-18-q3",
          "number": "Q3",
          "question": "사람들이 약속을 잡는 방식은 어떻게 달라졌나요? 연락 방법과 갑작스러운 변경을 예전과 지금으로 비교해 주세요.",
          "status": "필수",
          "answer": [
            "The way people make plans has changed a lot.",
            "In the past, people usually called each other.",
            "They decided on a time and place before leaving home.",
            "But now, people often send messages.",
            "They can quickly change plans and share their location.",
            "So yeah, making plans is easier now."
          ],
          "hint": "약속 잡는 방식이 많이 달라졌다고 시작하기. → 예전에는 서로 전화했다고 설명하기. → 집을 나서기 전에 시간과 장소를 정했다고 말하기. → 지금은 메시지를 자주 보낸다고 비교하기. → 계획을 빨리 바꾸고 위치를 공유할 수 있다고 설명하기. → 지금은 약속을 잡기가 더 쉬워졌다고 마무리하기.",
          "questionEn": "How has the way people make plans changed? Compare communication and last-minute changes in the past and now.",
          "type": "변화·비교",
          "hintSteps": [
            "약속 잡는 방식이 많이 달라졌다고 시작하기.",
            "예전에는 서로 전화했다고 설명하기.",
            "집을 나서기 전에 시간과 장소를 정했다고 말하기.",
            "지금은 메시지를 자주 보낸다고 비교하기.",
            "계획을 빨리 바꾸고 위치를 공유할 수 있다고 설명하기.",
            "지금은 약속을 잡기가 더 쉬워졌다고 마무리하기."
          ]
        },
        {
          "id": "topic-18-q4",
          "number": "Q4",
          "question": "가족이나 친구 모임에서 보통 무엇을 하나요? 어디서 만나고, 함께 어떻게 시간을 보내는지 설명해 주세요.",
          "status": "필수",
          "answer": [
            "I usually meet my friends at a restaurant.",
            "Sometimes, my family comes to my home.",
            "We order some food and eat together.",
            "We talk about work and everyday life.",
            "After eating, we take some pictures and talk for a while.",
            "So yeah, I enjoy spending time with them."
          ],
          "hint": "보통 친구들을 음식점에서 만난다고 말하기. → 가끔 가족은 우리 집에 온다고 설명하기. → 음식을 주문해서 함께 먹는다고 말하기. → 일과 일상에 관해 이야기한다고 설명하기. → 식사 후 사진을 찍고 잠시 더 이야기한다고 말하기. → 함께 시간 보내는 것이 좋다고 마무리하기.",
          "questionEn": "What do you usually do at gatherings with family or friends? Explain where you meet and how you spend time together.",
          "type": "일과·절차",
          "hintSteps": [
            "보통 친구들을 음식점에서 만난다고 말하기.",
            "가끔 가족은 우리 집에 온다고 설명하기.",
            "음식을 주문해서 함께 먹는다고 말하기.",
            "일과 일상에 관해 이야기한다고 설명하기.",
            "식사 후 사진을 찍고 잠시 더 이야기한다고 말하기.",
            "함께 시간 보내는 것이 좋다고 마무리하기."
          ]
        },
        {
          "id": "topic-18-q5",
          "number": "Q5",
          "question": "기억에 남는 모임이나 기념일을 말해 주세요. 누가 있었고, 무엇을 했으며, 왜 기억에 남나요?",
          "status": "필수",
          "answer": [
            "I remember one special day with my friends.",
            "It was my birthday, and my friends called me and asked me to meet them there.",
            "When I got there, they were already waiting for me with a cake and some gifts.",
            "Then, they started singing a birthday song for me.",
            "I was really surprised and almost cried.",
            "I was so thankful to my friends, and I will never forget that day."
          ],
          "hint": "친구들과 함께한 특별한 날을 떠올린다고 말하기. → 내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기. → 도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기. → 친구들이 생일 축하 노래를 불러 줬다고 설명하기. → 정말 놀라서 거의 울 뻔했다고 말하기. → 친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기.",
          "questionEn": "Tell me about a gathering or celebration you remember well. Who was there, what did you do, and why was it memorable?",
          "type": "과거 경험",
          "hintSteps": [
            "친구들과 함께한 특별한 날을 떠올린다고 말하기.",
            "내 생일이었고 친구들이 전화해서 그곳에서 만나자고 했다고 설명하기.",
            "도착해 보니 친구들이 케이크와 선물을 준비하고 기다리고 있었다고 말하기.",
            "친구들이 생일 축하 노래를 불러 줬다고 설명하기.",
            "정말 놀라서 거의 울 뻔했다고 말하기.",
            "친구들에게 고마웠고 그날을 절대 잊지 못한다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-18-q6",
          "number": "Q6",
          "question": "한국의 중요한 명절 하나를 골라 주세요. 그 명절에 사람들은 보통 무엇을 하고, 본인 가족은 무엇을 하나요?",
          "status": "필수",
          "answer": [
            "Chuseok is an important holiday in Korea.",
            "People usually visit their families and eat special food.",
            "They also spend time with relatives.",
            "My family usually has a meal together at home.",
            "After eating, we talk and relax for a while.",
            "So yeah, I enjoy spending Chuseok with my family."
          ],
          "hint": "한국의 중요한 명절로 추석을 소개하기. → 가족을 방문하고 특별한 음식을 먹는다고 설명하기. → 친척들과도 시간을 보낸다고 말하기. → 우리 가족은 보통 집에서 함께 식사한다고 설명하기. → 식사 후 잠시 이야기하고 쉰다고 말하기. → 가족과 추석을 보내는 것이 좋다고 마무리하기.",
          "questionEn": "Choose an important holiday in Korea. What do people normally do during that holiday, and what does your family do?",
          "type": "일과·절차",
          "hintSteps": [
            "한국의 중요한 명절로 추석을 소개하기.",
            "가족을 방문하고 특별한 음식을 먹는다고 설명하기.",
            "친척들과도 시간을 보낸다고 말하기.",
            "우리 가족은 보통 집에서 함께 식사한다고 설명하기.",
            "식사 후 잠시 이야기하고 쉰다고 말하기.",
            "가족과 추석을 보내는 것이 좋다고 마무리하기."
          ]
        },
        {
          "id": "topic-18-q7",
          "number": "Q7",
          "question": "명절이나 휴일에 겪은 문제를 말해 주세요. 무슨 일이 있었고, 어떻게 대처했으며, 결과는 어땠나요?",
          "status": "필수",
          "answer": [
            "I remember one problem I had during Chuseok.",
            "I was on a bus, but there was a lot of traffic.",
            "I knew I would be late for dinner with my family.",
            "So I called them and told them about the problem.",
            "They said it was okay and saved some food for me.",
            "So yeah, everything was fine in the end."
          ],
          "hint": "추석에 생긴 문제를 떠올린다고 말하기. → 버스를 탔는데 교통 체증이 심했다고 설명하기. → 가족과의 저녁 식사에 늦을 것 같았다고 말하기. → 가족에게 전화해서 문제를 알렸다고 설명하기. → 괜찮다고 하며 음식을 남겨 두었다고 말하기. → 결국 잘 해결됐다고 마무리하기.",
          "questionEn": "Tell me about a problem during a holiday. What happened, how did you deal with it, and what was the outcome?",
          "type": "문제 경험",
          "hintSteps": [
            "추석에 생긴 문제를 떠올린다고 말하기.",
            "버스를 탔는데 교통 체증이 심했다고 설명하기.",
            "가족과의 저녁 식사에 늦을 것 같았다고 말하기.",
            "가족에게 전화해서 문제를 알렸다고 설명하기.",
            "괜찮다고 하며 음식을 남겨 두었다고 말하기.",
            "결국 잘 해결됐다고 마무리하기."
          ],
          "levelAdjusted": true,
          "levelAdjustedAt": "2026-10-15"
        },
        {
          "id": "topic-18-q8",
          "number": "Q8",
          "question": "어릴 때 가족과 보낸 명절을 말해 주세요. 무엇을 했고, 그날 어떤 점이 기억나나요?",
          "status": "선택",
          "answer": [
            "I remember spending Chuseok with my family when I was a child.",
            "My cousins came to our house.",
            "We ate special food and talked together.",
            "After eating, we played games for a while.",
            "I was really happy because I could spend time with my cousins.",
            "So yeah, I still remember that day."
          ],
          "hint": "어릴 때 가족과 추석을 보낸 경험으로 시작하기. → 사촌들이 우리 집에 왔다고 말하기. → 특별한 음식을 먹고 함께 이야기했다고 설명하기. → 식사 후 잠시 게임을 했다고 말하기. → 사촌들과 시간을 보낼 수 있어 행복했다고 감정 말하기. → 아직 그날이 기억난다고 마무리하기.",
          "questionEn": "Tell me about a holiday you spent with your family as a child. What did you do, and what do you remember about that day?",
          "type": "과거 경험",
          "hintSteps": [
            "어릴 때 가족과 추석을 보낸 경험으로 시작하기.",
            "사촌들이 우리 집에 왔다고 말하기.",
            "특별한 음식을 먹고 함께 이야기했다고 설명하기.",
            "식사 후 잠시 게임을 했다고 말하기.",
            "사촌들과 시간을 보낼 수 있어 행복했다고 감정 말하기.",
            "아직 그날이 기억난다고 마무리하기."
          ]
        },
        {
          "id": "topic-18-q9",
          "number": "Q9",
          "question": "가장 최근 명절을 어떻게 보냈나요? 누구와 있었고, 그날 무엇을 했는지 말해 주세요.",
          "status": "선택",
          "answer": [
            "Last Chuseok, I spent time with my family at home.",
            "We ate special food together.",
            "We talked about work and everyday life.",
            "After eating, I helped clean the table and wash the dishes.",
            "Then, we sat together and relaxed.",
            "So yeah, I had a really nice holiday."
          ],
          "hint": "지난 추석에 집에서 가족과 시간을 보냈다고 시작하기. → 특별한 음식을 함께 먹었다고 말하기. → 일과 일상에 관해 이야기했다고 설명하기. → 식사 후 상을 치우고 설거지를 도왔다고 말하기. → 그다음 함께 앉아 쉬었다고 설명하기. → 정말 좋은 명절이었다고 마무리하기.",
          "questionEn": "How did you spend your most recent holiday? Tell me who you were with and what you did that day.",
          "type": "과거 경험",
          "hintSteps": [
            "지난 추석에 집에서 가족과 시간을 보냈다고 시작하기.",
            "특별한 음식을 함께 먹었다고 말하기.",
            "일과 일상에 관해 이야기했다고 설명하기.",
            "식사 후 상을 치우고 설거지를 도왔다고 말하기.",
            "그다음 함께 앉아 쉬었다고 설명하기.",
            "정말 좋은 명절이었다고 마무리하기."
          ]
        }
      ],
      "scriptGroups": [
        {
          "id": "topic-18-type-3",
          "title": "일과·절차",
          "questionIds": [
            "topic-18-q1",
            "topic-18-q4",
            "topic-18-q6"
          ]
        },
        {
          "id": "topic-18-type-5",
          "title": "과거 경험",
          "questionIds": [
            "topic-18-q5",
            "topic-18-q8",
            "topic-18-q9"
          ]
        },
        {
          "id": "topic-18-type-7",
          "title": "문제 경험",
          "questionIds": [
            "topic-18-q2",
            "topic-18-q7"
          ]
        },
        {
          "id": "topic-18-type-8",
          "title": "변화·비교",
          "questionIds": [
            "topic-18-q3"
          ]
        }
      ]
    }
  ],
  "minimalStudy": {
    "title": "유형에 맞는 공통 문장 익히기",
    "lead": "아래는 여러 답변에 활용하는 표현 모음입니다. 완성 답변은 전체 스크립트에서 5~7문장을 모두 읽으세요. 문장을 따로 골라 붙일 필요는 없습니다.",
    "anchors": [
      {
        "title": "집·방 묘사",
        "use": "위치·구성·분위기 질문에 활용합니다.",
        "lines": [
          {
            "en": "Well, I live alone in a small apartment, and it's a pretty quiet place.",
            "ko": "작고 꽤 조용한 아파트에서 혼자 살아요.",
            "source": "topic-1-q1",
            "role": "묘사"
          },
          {
            "en": "In the living room, there's a small sofa with a little table right next to it.",
            "ko": "거실에는 작은 소파가 있고 바로 옆에 작은 탁자가 있어요.",
            "source": "topic-1-q1",
            "role": "묘사"
          },
          {
            "en": "The room isn't very big, but it gets a lot of light, so it feels bright.",
            "ko": "방이 아주 크진 않지만 빛이 많이 들어와서 밝게 느껴져요.",
            "source": "topic-1-q1",
            "role": "묘사"
          },
          {
            "en": "The walls are white, and most of the furniture has a simple design.",
            "ko": "벽은 하얗고 가구는 대부분 디자인이 단순해요.",
            "source": "topic-1-q1",
            "role": "묘사"
          },
          {
            "en": "I really like my living room because it's the brightest room in my apartment.",
            "ko": "거실이 집에서 가장 밝은 방이라서 정말 좋아해요.",
            "source": "topic-1-q12",
            "role": "묘사"
          }
        ]
      },
      {
        "title": "카페·펍·음식점 묘사",
        "use": "같은 특징을 가진 장소에서만 재사용합니다.",
        "lines": [
          {
            "en": "There are comfortable chairs by the windows, with small tables between them.",
            "ko": "창가에 편안한 의자들이 있고 그 사이에 작은 탁자들이 있어요.",
            "source": "topic-3-q1",
            "role": "묘사"
          },
          {
            "en": "The music is soft enough that the whole place feels pretty calm.",
            "ko": "음악이 잔잔해서 공간 전체가 꽤 차분하게 느껴져요.",
            "source": "topic-3-q1",
            "role": "묘사"
          },
          {
            "en": "I mean, it's a simple little place, but it has a really comfortable feel.",
            "ko": "그러니까, 소박하고 작은 곳이지만 정말 편안한 느낌이에요.",
            "source": "topic-3-q1",
            "role": "묘사"
          },
          {
            "en": "The lights are warm and not too bright, which makes the room feel cozy.",
            "ko": "조명이 따뜻하고 너무 밝지 않아서 아늑하게 느껴져요.",
            "source": "topic-4-q1",
            "role": "묘사"
          }
        ]
      },
      {
        "title": "평소 일과",
        "use": "현재형으로 행동 순서를 말합니다.",
        "lines": [
          {
            "en": "I usually order an iced coffee and find a seat by the window.",
            "ko": "보통 아이스커피를 주문하고 창가 자리를 찾아요.",
            "source": "topic-3-q3",
            "role": "일과·절차"
          },
          {
            "en": "I usually take a short walk in the park without trying to go too fast.",
            "ko": "보통 공원에서 너무 서두르지 않고 잠깐 산책해요.",
            "source": "topic-5-q2",
            "role": "일과·절차"
          },
          {
            "en": "I take my time and look at the trees as I walk along the path.",
            "ko": "길을 따라 걸으면서 여유롭게 나무를 구경해요.",
            "source": "topic-5-q2",
            "role": "일과·절차"
          },
          {
            "en": "After about twenty minutes, I get a coffee and sit on a bench for a while.",
            "ko": "20분쯤 지나면 커피를 사서 벤치에 잠깐 앉아요.",
            "source": "topic-5-q2",
            "role": "일과·절차"
          },
          {
            "en": "Well, I listen to music almost every day, usually at home or while I'm going somewhere.",
            "ko": "거의 매일 음악을 듣는데, 보통 집에 있거나 어디로 이동할 때 들어요.",
            "source": "topic-8-q4",
            "role": "일과·절차"
          },
          {
            "en": "I use my phone and earphones, so I don't need to carry anything extra.",
            "ko": "휴대폰과 이어폰을 쓰니까 다른 걸 더 들고 다닐 필요가 없어요.",
            "source": "topic-8-q4",
            "role": "일과·절차"
          }
        ]
      },
      {
        "title": "방문·여행 경험",
        "use": "과거형으로 그날 실제로 한 일을 말하는 예시입니다.",
        "lines": [
          {
            "en": "In the end, I ordered an iced coffee and found a seat by the window.",
            "ko": "결국 아이스커피를 주문하고 창가 자리를 찾았어요.",
            "source": "topic-3-q4",
            "role": "과거 경험"
          },
          {
            "en": "I checked my phone while I drank it, and just took my time.",
            "ko": "커피를 마시면서 휴대폰도 확인하고 그냥 여유롭게 시간을 보냈어요.",
            "source": "topic-3-q4",
            "role": "과거 경험"
          },
          {
            "en": "I stayed for about half an hour, then returned my cup and headed home.",
            "ko": "30분쯤 머물다가 컵을 반납하고 집으로 갔어요.",
            "source": "topic-3-q4",
            "role": "과거 경험"
          },
          {
            "en": "I walked along the beach and took a few pictures of the sea.",
            "ko": "해변을 따라 걸으면서 바다 사진을 몇 장 찍었어요.",
            "source": "topic-7-q5",
            "role": "과거 경험"
          },
          {
            "en": "Honestly, it was a nice little break, and I'd be happy to do it again.",
            "ko": "솔직히 짧지만 좋은 휴식이었고, 다시 그렇게 쉬어도 좋겠어요.",
            "source": "topic-7-q5",
            "role": "과거 경험"
          }
        ]
      },
      {
        "title": "기억에 남는 경험",
        "use": "같은 사건을 묻는 질문에서 장면을 재사용합니다.",
        "lines": [
          {
            "en": "My friends once surprised me with a birthday cake at Haeundae Beach.",
            "ko": "한번은 친구들이 해운대에서 생일 케이크로 저를 놀라게 해줬어요.",
            "source": "topic-6-q5",
            "role": "과거 경험"
          },
          {
            "en": "When I arrived, they brought out the cake and started singing, which really surprised me.",
            "ko": "제가 도착하자 친구들이 케이크를 꺼내고 노래를 부르기 시작해서 정말 놀랐어요.",
            "source": "topic-6-q5",
            "role": "과거 경험"
          },
          {
            "en": "We sat by the sea and talked for a long time while we shared the cake.",
            "ko": "바닷가에 앉아 케이크를 나눠 먹으면서 오랫동안 이야기했어요.",
            "source": "topic-6-q5",
            "role": "과거 경험"
          },
          {
            "en": "Honestly, I felt really lucky to have friends who'd planned something like that for me.",
            "ko": "솔직히 저를 위해 그런 걸 준비해준 친구들이 있어서 정말 운이 좋다고 느꼈어요.",
            "source": "topic-6-q5",
            "role": "과거 경험"
          },
          {
            "en": "When that song started, people around me began singing along right away.",
            "ko": "그 노래가 시작되자 주변 사람들이 바로 따라 부르기 시작했어요.",
            "source": "topic-8-q7",
            "role": "과거 경험"
          },
          {
            "en": "I joined in too, and hearing all those voices felt very different from listening at home.",
            "ko": "저도 함께 불렀는데, 여러 사람의 목소리를 들으니 집에서 듣는 것과는 느낌이 아주 달랐어요.",
            "source": "topic-8-q7",
            "role": "과거 경험"
          }
        ]
      },
      {
        "title": "문제 경험·대처",
        "use": "문제에 맞는 조치와 결과만 재사용합니다.",
        "lines": [
          {
            "en": "I told the staff about the mistake and explained what I'd ordered.",
            "ko": "직원에게 실수를 알리고 제가 무엇을 주문했는지 설명했어요.",
            "source": "topic-3-q6",
            "role": "문제 경험"
          },
          {
            "en": "They said sorry and brought me the right order after just a few minutes.",
            "ko": "직원이 사과하고 몇 분 만에 제가 주문한 것을 가져다줬어요.",
            "source": "topic-3-q6",
            "role": "문제 경험"
          },
          {
            "en": "Honestly, I was just glad they fixed it so quickly without any trouble.",
            "ko": "솔직히 별문제 없이 그렇게 빨리 해결해줘서 좋았어요.",
            "source": "topic-3-q6",
            "role": "문제 경험"
          },
          {
            "en": "One day, I dropped it while I was sending a message.",
            "ko": "어느 날 메시지를 보내다가 휴대폰을 떨어뜨렸어요.",
            "source": "topic-15-q3",
            "role": "문제 경험"
          },
          {
            "en": "So I pressed the power button several times.",
            "ko": "그래서 전원 버튼을 여러 번 눌렀어요.",
            "source": "topic-15-q3",
            "role": "문제 경험"
          },
          {
            "en": "Luckily, it turned on again, and I could send the message.",
            "ko": "다행히 다시 켜져서 메시지를 보낼 수 있었어요.",
            "source": "topic-15-q3",
            "role": "문제 경험"
          }
        ]
      },
      {
        "title": "비교·변화",
        "use": "이전과 현재 또는 두 대상의 차이를 함께 말합니다.",
        "lines": [
          {
            "en": "Well, I used to live with my family, but now I live alone in a smaller apartment.",
            "ko": "예전에는 가족과 살았지만 지금은 더 작은 아파트에서 혼자 살아요.",
            "source": "topic-1-q4",
            "role": "변화·비교"
          },
          {
            "en": "The old place was bigger and busier, with people talking in different rooms.",
            "ko": "이전 집은 더 크고 북적였고, 여러 방에서 사람들이 이야기하곤 했어요.",
            "source": "topic-1-q4",
            "role": "변화·비교"
          },
          {
            "en": "My home is much quieter now, and it's also easier to clean.",
            "ko": "지금 집은 훨씬 조용하고 청소하기도 더 쉬워요.",
            "source": "topic-1-q4",
            "role": "변화·비교"
          },
          {
            "en": "Slow songs help me relax at the end of a busy day, without making me feel more awake.",
            "ko": "느린 노래는 바쁜 하루 끝에 잠을 깨우지 않으면서 편히 쉬는 데 도움이 돼요.",
            "source": "topic-8-q3",
            "role": "변화·비교"
          },
          {
            "en": "So, you know, I still like both kinds, but I choose slow songs more often now.",
            "ko": "그러니까, 둘 다 여전히 좋아하지만 지금은 느린 노래를 더 자주 골라요.",
            "source": "topic-8-q3",
            "role": "변화·비교"
          }
        ]
      },
      {
        "title": "롤플레이",
        "use": "용건 → 요청된 질문 또는 대안 → 확인 순서로 말합니다.",
        "lines": [
          {
            "en": "Hi, I want to visit your museum this weekend.",
            "ko": "안녕하세요, 이번 주말에 박물관을 방문하고 싶어요.",
            "source": "topic-10-rp2",
            "role": "정보 문의"
          },
          {
            "en": "Do I need to book a ticket?",
            "ko": "표를 예약해야 하나요?",
            "source": "topic-10-rp2",
            "role": "정보 문의"
          },
          {
            "en": "Thank you for your help.",
            "ko": "도와주셔서 감사합니다.",
            "source": "topic-10-rp2",
            "role": "정보 문의"
          },
          {
            "en": "Hey, I'm really sorry, but I can't meet you today.",
            "ko": "정말 미안한데 오늘 너를 못 만나겠어.",
            "source": "topic-10-rp3",
            "role": "문제 해결 역할극"
          },
          {
            "en": "Could we meet next weekend instead?",
            "ko": "대신 다음 주말에 만날 수 있을까?",
            "source": "topic-10-rp3",
            "role": "문제 해결 역할극"
          },
          {
            "en": "What do you think?",
            "ko": "어떻게 생각해?",
            "source": "topic-10-rp3",
            "role": "문제 해결 역할극"
          }
        ]
      }
    ],
    "steps": [
      "영어 질문을 읽고 한국어 번역으로 요구사항을 확인합니다.",
      "묘사·일과·경험·비교 등 질문 유형을 확인합니다.",
      "해당 답변의 5~7문장을 처음부터 끝까지 이어 말합니다.",
      "다른 질문에서도 같은 뜻이면 익힌 공통 문장을 재사용합니다.",
      "질문만 보며 연습하고 실제 질문이 요구하는 내용에 맞게 표현을 조절합니다."
    ],
    "note": "5~7문장은 이번 자료의 학습용 길이 기준이며 IM2의 공식 문장 수 기준이 아닙니다. 질문에 맞는 내용과 이해 가능한 말하기가 중요합니다. 묘사에 일과나 과거 사건을 덧붙이지 말고, 복합 질문은 요청한 두 부분에 모두 답하세요."
  },
  "questionNote": "공식 공개 안내의 질문 형식을 참고해 독자적으로 작성한 연습 문항입니다. 실제 기출 원문이나 출제 보장 목록이 아닙니다.",
  "sources": [
    {
      "title": "ACTFL OPIc 안내 · 평가하는 말하기 기능과 내용 적합성",
      "url": "https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic"
    },
    {
      "title": "ACTFL OPIc Familiarization Guide · 주제·일상·경험에 관한 안내",
      "url": "https://www.actfl.org/uploads/files/general/OPIc_Familiarization_Guide.pdf"
    },
    {
      "title": "OPIc 공식 사이트 공개 학습 가이드(2016) · 질문 형식 참고",
      "url": "https://www.opic.or.kr/senior/mail/2016/0729/images/a/opic_guide.pdf?opicnativepopup=true"
    },
    {
      "title": "오픽노잼 교재 공개 소개 · 쉬운 회화·필러·유형별 구성 참고",
      "url": "https://m.pagodabook.com/pc/book/view?book_seq=6809"
    },
    {
      "title": "오픽노잼 공식 IM 시리즈 재생목록 · 추가 학습",
      "url": "https://www.youtube.com/playlist?list=PL9Ieg7fw1BJKxNwPU3G2hdpM75nGIwyAB"
    }
  ]
};
