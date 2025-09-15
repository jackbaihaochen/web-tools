import { useMemo, useState } from 'react';
import { Button, Col, Input, Row, Space, Typography, message, Alert, Card } from 'antd';

const { TextArea } = Input;

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const parsed = useMemo(() => {
    try {
      if (!input.trim()) return null;
      const val = JSON.parse(input.trim());
      setError(null);
      return val;
    } catch (e: any) {
      setError(e.message);
      return null;
    }
  }, [input]);

  const onFormat = () => {
    if (parsed === null) return;
    setOutput(JSON.stringify(parsed, null, 2));
    setOk('已完成');
  };

  const onMinify = () => {
    if (parsed === null) return;
    setOutput(JSON.stringify(parsed));
    setOk('已完成');
  };

  const onValidate = () => {
    if (parsed !== null) {
      message.success('语法有效');
      setOk(null);
    }
  };

  const onClear = () => {
    setInput('');
    setOutput('');
    setError(null);
    setOk(null);
  };

  const onCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    message.success('已复制');
  };

  const onDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'application/json;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'formatted.json';
    a.click();
    URL.revokeObjectURL(a.href);
    message.success('已下载');
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>JSON 格式化工具</Typography.Title>
        <Typography.Text type="secondary">一键格式化、压缩、校验、复制与下载</Typography.Text>
      </div>

      {error && <Alert type="error" showIcon message={`语法错误：${error}`} />}
      {ok && <Alert type="success" showIcon message={ok} />}

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="输入">
            <TextArea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='{"hello":"world"}'
              autoSize={{ minRows: 16 }}
              spellCheck={false}
            />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button type="primary" onClick={onFormat}>美化</Button>
                <Button onClick={onMinify}>压缩</Button>
                <Button onClick={onValidate}>校验</Button>
                <Button danger onClick={onClear}>清空</Button>
              </Space>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="输出">
            <TextArea value={output} readOnly autoSize={{ minRows: 16 }} spellCheck={false} />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button onClick={onCopy}>复制</Button>
                <Button onClick={onDownload}>下载 .json</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>

      <Typography.Paragraph>
        本工具在浏览器本地完成 JSON 解析与格式化（调用 JavaScript 原生 <code>JSON.parse</code> 与 <code>JSON.stringify</code>）。不会上传你的数据。
      </Typography.Paragraph>
    </Space>
  );
}

