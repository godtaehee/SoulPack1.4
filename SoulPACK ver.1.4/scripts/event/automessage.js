importPackage(net.sf.odinms.client);
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 60000;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var Message = new Array("�������� ���������� ��������ֽ��ϴ�..","�����α׷� ����ϴ� ���߽� �����������ƴ϶� ����,ĳ���� �����մϴ�.","ī��ä�ù� �ѵνñ�ٶ��ϴ�..","�����̶� ���������������� ������� �����Ͻñ�ٶ��ϴ�..","[�ѿ�������]�Դϴ�.","���ĳ���ʹ� �ݵ�� �նǴ� �ڿ� GM�� �ٽ��ϴ�.","â���� ���÷��� Alt + Enter �������ø� â���� �÷����ϽǼ��ֽ��ϴ�.","������ �ᱸ��,������ Ŀ�׽�Ƽ�� ���������� �ϽǼ��ֽ��ϴ�.");
    em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[Tip] " + Message[Math.floor(Math.random() * Message.length)]));
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}