/*
	Rudibrium
	MADE BY 소희 (jantnic)
*/

function start() {
	status = -1;
	action(1);
}

function action(mode) {
	if (mode == -1) {
		cm.dispose();
	} else {
		cm.sendOk("장난감 공장의 부품이 사라지는 사건이 발생하고 있어서 큰일이라네. 도대체 어떤 괘씸한 녀석이 가져가지는 건지 모르겠군 그래. 이렇게 부품이 사라져서야 공장을 제대로 가동할 수가 없는데...");
		cm.dispose();
	}
}